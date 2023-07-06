import type { User } from '@nhost/vue'
import { defineStore } from 'pinia'
import type { Just, Maybe } from '../utils/monads'
import { Nothing, isNothing, nothing } from '../utils/monads'
import type { Nullable } from '../utils/types'
import { ErrorFatalNever } from './../utils/error'
import { type AllDataUser, fetchAllData_User } from './../services/graphQL'

export const userStore = defineStore('user', {
  state: () => ({
    user: null as Nullable<User>,
    data: null as Nullable<AllDataUser>,
  }),
  actions: {
    async loadAllDataUser(): Promise<AllDataUser> {
      if (this.data === null) {
        if (this.user === null) {
          throw new ErrorFatalNever("User is null")
        }
        else {
          const res = await fetchAllData_User(this.user.id)
          this.data = res
          return res
        }
      }
      else {
        return this.data as AllDataUser
      }
    },
  },
})

