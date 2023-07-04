<script setup lang="ts">
import type { BacklogModel } from '../models/backlog'
import { either } from '../utils/monads'
import { log } from '../utils/log'
import { dataStore } from '~/stores/data'
const state = reactive({
  Backlog: [] as BacklogModel[],
})

const loadData = async () => {
  const res = await dataStore().loadAllDataUser()

  either(res, log, (data) => {
    state.Backlog = data.backlog
  })
}

loadData()
</script>

<template>
  <div>
    <h1>
      Backlog
    </h1>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
  requiresAuth: true
  </route>

