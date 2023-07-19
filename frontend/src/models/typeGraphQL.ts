import { Task } from './../gql/graphql'
// import { gql } from "@apollo/client/core";
// import { Query_Root } from "~/gql/graphql";

import { gql } from "@apollo/client/core";

// type GQL_Operation = Query_Root

// import * as gql from 'gql-query-builder'
import { GetBacklogDocument, GetBacklogQueryVariables } from '../../../types/generated';
import { apollo } from '~/modules/apollo';


// gql.query


// operations: Query_Root

// const query = gql.query([{
//   operation: "getFilteredUsersCount",
// },
//   {
//     operation: "getAllUsersCount",
//     fields: []
//   },
// ]);

const req = await apollo.query ({
  query: GetBacklogDocument,
  variables: {
    userId : "1"
  }
})

req.data.backlog_by_pk?.ListTask?.map((task) => {
  console.log(task.description)
}


  
  





