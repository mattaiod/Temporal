import type { User } from '@nhost/vue'
import { defineStore } from 'pinia'
import type { AllDataUser } from '../services/graphQL'
import type { Nullable } from '../utils/types'

export const dataStore = defineStore({
  id: 'data',
  state: () => ({
    value: null as Nullable<AllDataUser>,
  }),
})
