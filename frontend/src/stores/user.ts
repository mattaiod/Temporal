import type { User } from '@nhost/vue'
import { defineStore } from 'pinia'
import type { Nullable } from '../utils/types'
import { nothing } from '../utils/monads'
import type { type Either, Maybe, ifRight, left, right } from '../utils/monads'
import { ErrorFatalNever } from '../utils/error'
import { isNull } from '../utils/logic'

export const userStore = defineStore({
  id: 'user',
  state: () => ({
    user: nothing() as Maybe<User>,
  }),

  getters: {
    getUser(): Maybe<User> {
      return this.user
    },
  },
})
