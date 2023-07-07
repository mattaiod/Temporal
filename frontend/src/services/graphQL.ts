import { gql } from "@apollo/client/core"
import type { AsyncReturnType } from 'type-fest'
import type { ErrorPayload } from "@nhost/vue"
import type { DayPlanningModel } from '../models/dayPlanning'
import type { BacklogModel } from '../models/backlog'
import { nhost } from '../modules/nhost'
import type { Either } from "../utils/monads"
import { left, right } from "../utils/monads"
import { isNotNull, isNull } from "../utils/logic"
import type { ValueOf } from '../utils/types'
import type { Fatal } from "../utils/error"
import { ErrorFatalNever, ErrorFetchFailed, ErrorInsertFailed } from "../utils/error"
import type { IdTaskBacklog, TaskBacklogInsert, TaskBacklogModel } from "~/models/taskBacklog"
import type { IdUser } from "~/models/user"

export interface AllDataUser {
  backlog: BacklogModel[]
  dayPlanning: DayPlanningModel[]
}

export type ResFetch<T> = AsyncReturnType<typeof nhost.graphql.request<T>>

export type ErrorResFetch = ResFetch<never>["error"]

export const tryCatchRequest = async <T>(fn: () => Promise<ResFetch<T>>): Promise<Either<Fatal<ErrorResFetch>, T>> => {
  try {
    const res = await fn()
    if (res.error)
      return left(res.error)
    else
      return isNull(res.data) ? left(new ErrorFatalNever("Failed to fetch data")) : right(res.data)
  }
  catch (err: any) {
    return left(new ErrorFetchFailed(err))
  }
}

export const fetchAllData_User = async (userId: string) => {
  const Request = gql`
  query ($userId: uuid!) {
  backlog(where: {user_id: {_eq: $userId}}) {
    createdAt
    id
    updatedAt
    ListTask(where: {dayPlanning_id: {_is_null: true}}) {
      createdAt
      updatedAt
      title
      status
      priority
      id
      description
      deadline
    }
  }
  dayPlanning {
    ListTaskPriorityMax3 {
      createdAt
      deadline
      description
      id
      priority
      status
      timeBegin
      timeEnd
      title
      updatedAt
    }
    createdAt
    date
    id
    updatedAt
  }
}
`
  try {
    const res = await nhost.graphql.request<AllDataUser>(Request, { userId })
    if (res.error)
      throw res.error
    else
      return res.data
  }
  catch (err: any) {
    throw new ErrorFetchFailed(err)
  }

  // return await tryCatchRequest(() => nhost.graphql.request<AllDataUser>(Request, { userId }))
}

export const insertTaskBacklog = async (obj: TaskBacklogInsert) => {
  const Req = gql`
  mutation MyMutation($user_id: uuid!, $title: String!, $description: String!, $priority: priority_enum!, $status: taskStatus_enum!, $backlog_id: uuid!) {
  insert_task(objects: {user_id: $user_id , title: $title, description: $description, priority: $priority, status: $status, backlog_id: $backlog_id}) {
    returning {
      id
      createdAt
      updatedAt
      deadline
    }
  }
}
`

  interface InsertBaseReturn<T> {
    insert_task: {
      returning: {
        id: T
        createdAt: Date
        updatedAt: Date
        deadline: Date | null
      }[]
    }
  }

  try {
    const res = (await nhost.graphql.request <InsertBaseReturn<IdTaskBacklog>>(Req, { ...obj }))
    if (res.error)
      throw res.error
    else
      return res.data.insert_task.returning[0]
  }
  catch (err: any) {
    throw new ErrorInsertFailed(err)
  }
}

export const updateTaskBacklog = async (obj: { id: string; title: string; description: string }) => {
  const Req = gql`
  mutation MyMutation($id: uuid!, $title: String!, $description: String!) {
    update_task(where: {id: {_eq: $id}}, _set: {title: $title, description: $description, id: $id}) {
      returning {
        id
      }
    }
  }`

  try {
    const res = (await nhost.graphql.request<IdTaskBacklog>(Req, { id: obj.id, title: obj.title, description: obj.description }))
    if (res.error)
      throw res.error
    else
      return res.data
  }
  catch (err: any) {
    throw new ErrorInsertFailed(err)
  }
}

export const deleteTaskBacklog = async (id: string) => {
  const Req = gql`
  mutation MyMutation($id: uuid!) {
    delete_task(where: {id: {_eq: $id}}) {
      returning {
        id
      }
    }
  }`

  try {
    const res = (await nhost.graphql.request<IdTaskBacklog>(Req, { id }))
    if (res.error)
      throw res.error
    else
      return res.data
  }
  catch (err: any) {
    throw new ErrorInsertFailed(err)
  }
}

export const insertDayPlanningQL = async (date: Date, ListTask: TaskBacklogModel[], ListTaskPriorityMax3: TaskBacklogModel[], user_id: IdUser) => {
  const idPlanningId = await nhost.graphql.request<string>(gql`
  mutation MyMutation($user_id: uuid!, $date: date!) {
  insert_dayPlanning_one(object: {user_id: $user_id, date: $date}) {
    id
  }
  }
`, { user_id, date })

  await Promise.all(ListTask.map(async (task) => {
    await nhost.graphql.request<string>(gql`
  mutation MyMutation {
  update_task(where: {id: {_eq: ""}}, _set: {dayPlanning_id: ""})
  }
`, { id: task.id, dayPlanning_id: idPlanningId },
    )
  }))

  await Promise.all(ListTaskPriorityMax3.map(async (task) => {
    await nhost.graphql.request<string>(gql`
  mutation MyMutation($id: uuid!, $dayPlanning_ListTaskPriority: uuid!) {
    update_task(where: {id: {_eq: $id}}, _set: {dayPlanning_ListTaskPriority: $dayPlanning_ListTaskPriority})
  }
`, { id: task.id, $dayPlanning_ListTaskPriority: idPlanningId },
    )
  }))

  return await fetchAllData_User(user_id)
}
