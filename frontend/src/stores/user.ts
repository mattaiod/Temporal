import type { User } from '@nhost/vue'
import { defineStore } from 'pinia'
import type { Nullable } from '../utils/types'
import { type Either, ifRight, left, right } from '../utils/monads'
import { ErrorFatalNever } from '../utils/error'
import { isNull } from '../utils/logic'

export const userStore = defineStore({
  id: 'user',
  state: () => ({
    user: null as Nullable<User>,
  }),

  getters: {
    getUser(): Either<ErrorFatalNever, User> {
      if (isNull(this.user))
        return left(new ErrorFatalNever("UserStore is null"))
      else
        return right(this.user)
    },
  },
})
