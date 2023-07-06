<script setup lang="ts">
import { URL_FIRST } from '../router'

const router = useRouter()
const { t } = useI18n()
</script>

<template>
  <main p="x4 y10" text="center teal-700 dark:gray-200">
    <div text-4xl>
      <div i-carbon-warning inline-block />
    </div>
    <RouterView />
    <div>
      <button btn text-sm m="3 t8" @click="router.push(URL_FIRST)">
        Back to home
      </button>
    </div>
  </main>
</template>
