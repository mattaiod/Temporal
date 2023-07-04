import type { User } from '@nhost/vue'
import { defineStore } from 'pinia'
import type { Nullable } from '../utils/types'
import { type Either, ifRight, left } from '../utils/monads'
import { ErrorFatalNever, type Fatal } from '../utils/error'
import { type AllDataUser, type ErrorResFetch, fetchAllData_User } from '../services/graphQL'
import { isNull } from '../utils/logic'
import { dataStore } from './data'

export const userStore = defineStore({
  id: 'user',
  state: () => ({
    user: null as Nullable<User>,
  }),

  getters: {
    getUser(): Nullable<User> {
      return this.user
    },

  },
})
