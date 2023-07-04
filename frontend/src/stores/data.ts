import { defineStore } from 'pinia'
import { fetchAllData_User } from '../services/graphQL'
import type { AllDataUser, ErrorResFetch } from '../services/graphQL'
import type { Nullable } from '../utils/types'
import { type Either, ifRight, left } from '../utils/monads'
import { ErrorFatalNever, type Fatal } from '../utils/error'
import { isNull } from '../utils/logic'
import { loadAllDataUser } from '../services/dataCache'
import { userStore } from './user'

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

    async loadAllDataUser(): Promise<Either<Fatal<ErrorResFetch>, AllDataUser>> {
      const UserStore = userStore().user

      if (isNull(UserStore)) { return left(new ErrorFatalNever("UserStore is null")) }
      else {
        return ifRight(await fetchAllData_User(UserStore.id),
          this.setValue)
      }
    },
  },
})
