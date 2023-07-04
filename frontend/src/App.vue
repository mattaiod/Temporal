<script setup lang="ts">
import { fetchAllData_User } from './services/graphQL'
import { isNotNull, isNull } from './utils/logic'
import { throwErr } from './utils/error'
import { dataStore } from './stores/data'
import { userStore } from '~/stores/user'
useHead({
  title: "Temporal",
  meta: [
    { name: "description", content: "Temporal" },
    {
      name: "theme-color",
      content: computed(() => (isDark.value ? "#00aba9" : "#ffffff")),
    },
  ],
  link: [
    {
      rel: "icon",
      type: "image/svg+xml",
      href: computed(() => (preferredDark.value ? "/icons/favicon-dark.svg" : "/icons/favicon.svg")),
    },
  ],
})
</script>

<template>
  <RouterView />
</template>
