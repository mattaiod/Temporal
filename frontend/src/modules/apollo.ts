
import { ApolloClient, InMemoryCache } from "@apollo/client"


export const apollo = new ApolloClient({
  uri: "https://local.graphql.nhost.run/v1",
  cache: new InMemoryCache(),
  connectToDevTools: true,
})
