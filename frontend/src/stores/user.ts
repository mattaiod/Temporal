import type { User } from '@nhost/vue'
import { defineStore } from 'pinia'
import type { Just, Maybe } from '../utils/monads'
import { Nothing, isNothing, nothing } from '../utils/monads'
import { loadAllDataUser } from '../services/dataCache'
import type { AllDataUser } from './../services/graphQL'

// export const userStore = defineStore('user', {
//   state: () => ({
//     user: nothing() as Maybe<User>,
//   }),

// getters: {
//   getUser(): Maybe<User> {
//     return userStore().user
//   },
// },
// actions: {
//   setUser(user: User) {
//     this.user = user
//     return user
//   },
// },
// })
// export const userStore = defineStore('user', {
//   state: () => ({
//     user: nothing() as Maybe<User>,
//   }),
//   getters: {
//     getUser(state) {
//       return state.user
//     },
//   },
// })

export const userStore = defineStore('userStore', () => {
  const state = reactive({
    user: nothing() as Maybe<User>,
    data: nothing() as Maybe<AllDataUser>,
  })

  const loadAllDataUser = (val2: Maybe<User>) => {
    const val: Maybe<User> = state.user
    if (val instanceof Nothing) {
      const user = val
    }
    else {
      const userr = val
    }
  }

  // async loadAllDataUser() {
  //   if (this.value.isNothing()) {
  //     const UserFromStore = userStore().getUser
  //     if (UserFromStore.isNothing()) { return left(new ErrorFatalNever("User is null")) }
  //     else {
  //      const uu =  UserFromStore.getOrElse(() => { throw new ErrorFatalNever("User is null") })
  //   }

// debugger
// if (this.value instanceof Nothing) {
//   const UserFromStore = userStore().getUser
//   debugger
//   if (UserFromStore instanceof Nothing)
//     return left(new ErrorFatalNever("User is null"))
//   else
//     return eitherAlwaysIfRight(await fetchAllData_User(fromJust(UserFromStore.id)), this.setValue)
// }
// else {
//   return right(this.value.from())
// }
})

