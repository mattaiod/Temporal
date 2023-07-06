import { Request } from "express";
import { gql } from "@apollo/client/core"
import { NhostClient } from '@nhost/nhost-js'


const nhost = new NhostClient({
  functionsUrl:  'https://local.functions.nhost.run/v1',
  authUrl: 'https://local.auth.nhost.run/v1',
  graphqlUrl: 'https://local.hasura.nhost.run/v1/graphql',
  storageUrl: 'https://local.storage.nhost.run/v1/storage',
})

export default async (req: Request) => {

  const userId = req.body.user_id


  const Request = gql`
    mutation InsertBacklog($user_id: uuid) {
      insert_backlog(objects: {user_id: $user_id}) {
        returning {
          createdAt
          updatedAt
          id
        }
      }
    }
  `


  const res = await nhost.graphql.request(Request, { userId })
  console.log(res.error)

};
