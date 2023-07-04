import { gql } from "@apollo/client/core"
import type { DayPlanningModel } from '../models/dayPlanning'
import type { BacklogModel } from '../models/backlog'
import { nhost } from '../modules/nhost'
import { tryCatchRequest } from "./dataCache"

export interface AllDataUser {
  backlog: BacklogModel[]
  dayPlanning: DayPlanningModel[]
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

type AsyncReturnType<T extends (...args: any) => Promise<any>> = T extends (...args: any) => Promise<infer R> ? R : any

const res = await nhost.graphql.request<AllDataUser>(Request, { userId })
const dd = res.error

  type b = AsyncReturnType<typeof nhost.graphql.request>

  NhostGraphqlRequestResponse
}

export type AsyncReturnType<Target extends AsyncFunction> = Awaited<ReturnType<Target>>
