import type { User } from '@nhost/vue'
import { defineStore } from 'pinia'
import type { Maybe } from '../utils/monads'
import { maybe, nothing } from '../utils/monads'

export const userStore = defineStore({
  id: 'user',
  state: () => ({
    user: nothing() as Maybe<User>,
  }),

  getters: {
    getUser(state) {
      return state.user
    },
  },

  actions: {
    setUser(user: User) {
      this.user = maybe(user)
      return user
    },
  },
})
