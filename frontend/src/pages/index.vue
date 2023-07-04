<script setup lang="ts">
import { useApolloClient, useLazyQuery, useQuery } from "@vue/apollo-composable"
import { fetchAllData_User } from '../services/graphQL'
import type { IdUser } from '../models/user'

const state = reactive({
  result: [],
})
</script>

<template>
  <div>
    Hello
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
  requiresAuth: true
</route>
