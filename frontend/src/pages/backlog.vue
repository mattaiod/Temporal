<script setup lang="ts">
import type { BacklogModel } from '../models/backlog'
const state = reactive({
  Backlog: [] as BacklogModel[],
})

const loadData = () => {
  state.Backlog = [
    {
      id: 1,
      title: 'Test',
      description: 'Test',
      status: 'todo',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]
}
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

