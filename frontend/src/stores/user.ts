import type { User } from '@nhost/vue'
import { defineStore } from 'pinia'
import type { Nullable } from '../utils/types'

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
