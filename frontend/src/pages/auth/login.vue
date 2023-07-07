<script setup lang="ts">
import { useSignInEmailPassword } from '@nhost/vue'
import { useRouter } from 'vue-router'
import { either } from '../../utils/monads'
import { log } from '../../utils/log'
import { signInEmailPassword } from '../../services/auth'
import { URL_FIRST } from '../../router'

const router = useRouter()
const email = ref('')
const password = ref('')

const handleSubmit = async (event: Event) => {
  event.preventDefault()
  const res = await signInEmailPassword(email.value, password.value)
  either(res, log, () => router.push(URL_FIRST))
}
</script>

<template>
  <div>
    <q-card-section>
      <q-form class="q-gutter-md">
        <q-input v-model="email" square filled clearable type="email" label="email" />
        <q-input v-model="password" square filled clearable type="password" label="password" />
      </q-form>
    </q-card-section>
    <q-card-actions class="q-px-md">
      <q-btn @click="handleSubmit" color="light-green-7" size="lg" class="full-width" label="Se connecter" />
    </q-card-actions>
  </div>
</template>
