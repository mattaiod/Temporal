import { defineStore } from 'pinia'
import { fetchAllData_User } from '../services/graphQL'
import type { AllDataUser, ErrorResFetch } from '../services/graphQL'
import type { Nullable } from '../utils/types'
import { type Either, Left, eitherAlwaysIfRight, eitherDoAndReturn, getValueKeyEitherRight, ifRight, isLeft, isRight, left, right } from '../utils/monads'
import { ErrorFatalNever, type Fatal } from '../utils/error'
import { isNotNull, isNull } from '../utils/logic'

import { ValueOf } from '../utils/types'
import { userStore } from './user'
import { always } from '~/utils/function'

export const dataStore = defineStore({
  id: 'data',
  state: () => ({
    value: null as Nullable<AllDataUser>,
  }),

  getters: {
  //   async getValue(): Promise<Either<Fatal<ErrorFatalNever>, AllDataUser>> {
  //     if (isNull(this.value))
  //       return left(new ErrorFatalNever("DataStore is null"))
  //     else
  //       return await this.actions.loadAllDataUser()
  //   },
  // },
  },

  actions: {
    setValue(value: AllDataUser) {
      this.value = value
      return value
    },

    loadAllDataUser() {
      if (isNotNull(this.value))
        return right(this.value)

      const UserFromStore = userStore().getUser

      // if (isLeft(UserFromStore))
      //   return UserFromStore

      // if (isRight(UserFromStore))
      //   return ifRight(await fetchAllData_User(UserFromStore.from().id), this.setValue)

      // return left(new ErrorFatalNever("loadAllDataUser: UserFromStore is neither left nor right"))
      const res = getValueKeyEitherRight(UserFromStore, "id")

      // return eitherDoAndReturn(getValueKeyEitherRight(UserFromStore, "id"), always, () => {

      // })
    },
  },
})

