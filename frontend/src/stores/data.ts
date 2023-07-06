import { defineStore } from 'pinia'
import * as P from 'pratica'
import * as M from 'monet'
import type { User } from '@nhost/vue'
import { fetchAllData_User } from '../services/graphQL'
import type { AllDataUser, ErrorResFetch } from '../services/graphQL'

import type { Either, Left, Maybe, Right } from '../utils/monads'
import { Just, Nothing, eitherAlwaysIfRight, fromJust, isLeft, isNothing, isRight, left, nothing, right } from '../utils/monads'

import { always } from '../utils/function'
import { userStore } from './user'
import { ErrorFatalNever } from '~/utils/error'

// export const dataUserStore = defineStore({
//   id: 'data',
//   state: () => ({
//     value: new Nothing() as Maybe<AllDataUser>,
//   }),

//   const val = new Nothing() as Maybe<AllDataUser>

//   getters: {
//     getValue(state) {
//       return state.value
//     },
//   },

//   actions: {
//     loadAllDataUser() {
//       if(isNothing(this.value as Maybe<AllDataUser>)) {

//       const UserFromStore = userStore().getUser as Maybe<User>

//       if (UserFromStore instanceof Nothing) {

//       }
//       else {
//         const uu = UserFromStore
//       }
//     },
//   },
// })

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

const cataMaybe = <A, B, C>(m: Maybe<A>, obj: {
  Just: (arg: A) => B
  Nothing: () => C
}): B | C => {
  if (m instanceof Just)
    return obj.Just(m.value)
  else return obj.Nothing()
}

const cataEither = <A, B, C, D>(m: Either<A, B>, obj: {
  Left: (arg: A) => C
  Right: (arg: B) => D
}): C | D => {
  if (isLeft(m))
    return obj.Left(m.value)
  else return obj.Right(m.value)
}
