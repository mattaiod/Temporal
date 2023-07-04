import { useApolloClient } from '@vue/apollo-composable'
import { gql } from "@apollo/client/core"
import type { IdUser } from '~/models/user'
import { nhost } from '~/modules/nhost'
import type { BacklogModel } from '~/models/backlog'
import type { DayPlanningModel } from '~/models/dayPlanning'

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
  return await nhost.graphql.request<AllDataUser>(Request, { userId })
}

