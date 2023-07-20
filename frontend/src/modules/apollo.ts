
import { InMemoryCache } from "@apollo/client/cache/inmemory/inMemoryCache";
import { ApolloClient } from "@apollo/client/core/ApolloClient";



// Create the apollo client
export const apollo = new ApolloClient({
  uri: "https://local.graphql.nhost.run/v1",
  cache: new InMemoryCache(),
  headers: {
    "x-hasura-admin-secret": "nhost-admin-secret",
  },
})


