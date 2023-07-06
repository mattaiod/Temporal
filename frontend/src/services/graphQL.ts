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
import type { IdTaskBacklog, TaskBacklogInsert } from "~/models/taskBacklog"

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
