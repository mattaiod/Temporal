<script setup lang="ts">
import { either } from '../utils/monads'
import { log } from '../utils/log'
import { signOut } from '~/services/auth'
const router = useRouter()

const fn = {
  async signOut() {
    either(await signOut(), log, () => router.push('/auth/login'))
  },
}
</script>

<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <div class="flex justify-between">
        <span>Temporal</span>
        <div>
          <q-btn label="Backlog" flat dense to="/backlog" />
          <q-btn label="Today" flat dense to="/today" />
          <q-btn label="Day Planning" flat dense to="/day-planning" />
        </div>
        <q-btn label="Sign out" flat dense @click="fn.signOut" />
      </div>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
