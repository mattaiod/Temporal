// import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client/core"

// import { onError } from "@apollo/client/link/error"

// function getHeaders() {
//     const headers = {
//         "x-hasura-admin-secret": "nhost-admin-secret",
//     }
//     const token = window.localStorage.getItem("apollo-token")
//     if (token) {
//         headers["Authorization"] = `Bearer ${token}`
//     }
//     return headers
// }

// // Create an http link:
// const httpLink = new HttpLink({
//     uri: "https://local.graphql.nhost.run/v1",
//     fetch: (uri: RequestInfo, options: RequestInit) => {
//         options.headers = getHeaders()
//         return fetch(uri, options)
//     },
// })

// const errorLink = onError((error) => {
//     if (process.env.NODE_ENV !== "production") {
//         logErrorMessages(error)
//     }
// })

// // Create the apollo client
// export const apolloClient = new ApolloClient({
//     cache: new InMemoryCache(),
//     link: errorLink.concat(httpLink),
// })