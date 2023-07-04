import { defineStore } from 'pinia'
import { fetchAllData_User } from '../services/graphQL'
import type { AllDataUser, ErrorResFetch } from '../services/graphQL'
import type { Nullable } from '../utils/types'
import { Just, Nothing, eitherAlwaysIfRight, isNothing, left, nothing, right } from '../utils/monads'
import type { type Either, Left, Maybe, eitherAlwaysIfRightAsync, eitherAlwaysIfRightC, eitherDoAndReturn, fromEither, getValueKeyEitherRight, ifRight, isJust, isLeft, isRight, nullToMaybe, switchEither } from '../utils/monads'
import { ErrorFatalNever, type Fatal } from '../utils/error'
import { isNotNull, isNull } from '../utils/logic'

import { ValueOf } from '../utils/types'
import { compose } from '../utils/function'
import { userStore } from './user'
import { always } from '~/utils/function'

export const dataStore = defineStore({
  id: 'data',
  state: () => ({
    value: nothing() as Maybe<AllDataUser>,
  }),

  getters: {
    getValue(state) {
      return state.value
    },

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

    async loadAllDataUser() {
      if (this.value instanceof Nothing) {
        const UserFromStore = userStore().getUser

        if (UserFromStore instanceof Nothing)
          return left(new ErrorFatalNever("User is null"))

        const DataUser = UserFromStore.from()

        return eitherAlwaysIfRight(await fetchAllData_User(DataUser.id), this.setValue)
      }
      else {
        return right(this.value.from())
      }
    },
  },
})

