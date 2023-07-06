import "vue-router"

export {}

export const URL_LIST = {
  backlog: "/backlog",
  login: "/auth/login",
  signup: "/auth/signup",
  dayPlanning: "/day-planning",
  today: "/today",
}

export const URL_FIRST = URL_LIST.backlog

declare module "vue-router" {
  interface RouteMeta {
    // is optional
    isAdmin?: boolean
    // must be declared by every route
    requiresAuth?: boolean
    requiresNotAuth?: boolean
    roles?: string[]
  }
}
