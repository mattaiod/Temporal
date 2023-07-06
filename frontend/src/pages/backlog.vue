<script setup lang="ts">
import type { BacklogModel } from '../models/backlog'
import type { Maybe } from '../utils/monads'
import { either, nothing } from '../utils/monads'
import { log } from '../utils/log'
import { dataStore } from '~/stores/data'
const state = reactive({
  Backlog: nothing() as Maybe<BacklogModel>,
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

