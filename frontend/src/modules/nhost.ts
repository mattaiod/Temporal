import type { UserModule } from "~/types"




import { userStore } from "~/stores/user"
import { NhostClient } from '@nhost/vue'

const region = import.meta.env["VITE_NHOST_REGION"]
const subdomain = import.meta.env["VITE_NHOST_SUBDOMAIN"]

export const nhost = new NhostClient({
 region,
  subdomain,
})






export const install: UserModule = ({ router }) => {
  // app.use(VueApolloComponents);
  // AUTH GUARD
  router.beforeEach(async (to, _, next) => {
    if (to.meta.requiresAuth) {
      await nhost.auth.isAuthenticatedAsync()
      const session = nhost.auth.getSession()
      if (session) {
        userStore().user = session.user
        next()
      }
      else { next("/auth/login") }
    }
    else {
      next()
    }
  })
  // NOTAUTH GUARD
  router.beforeEach(async (to, _, next) => {
    if (to.meta.requiresNotAuth) {
      await nhost.auth.isAuthenticatedAsync()
      const session = nhost.auth.getSession()
      if (session)
        next("/")
      else next()
    }
    else {
      next()
    }
  })
  // ROLES GUARD
  // router.beforeEach(async (to, from, next) => {
  //   if (to.meta.roles && to.meta.roles.length > 0) {
  //     await nhost.auth.isAuthenticatedAsync()
  //     const session = nhost.auth.getSession()
  //     if (session) {
  //       const userRoles = session.user?.roles
  //       // console.log('ROLES USER', userRoles)
  //       // console.log('REQUIRED ROLES', to.meta.roles)
  //       let userHasRole = false
  //       to.meta.roles.forEach((r) => {
  //         if (userRoles?.includes(r))
  //           userHasRole = true
  //       })
  //       if (userHasRole)
  //         next()
  //       else next("/")
  //     }
  //     else {
  //       next()
  //     }
  //   }
  //   else {
  //     next()
  //   }
  // })
}
