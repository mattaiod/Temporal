<script setup lang="ts">
import { useSignInEmailPassword } from '@nhost/vue'
import { useRouter } from 'vue-router'
import { either } from '../../utils/monads'
import { log } from '../../utils/log'
import { signInEmailPassword } from '../../services/auth'

const router = useRouter()
const email = ref('')
const password = ref('')

const handleSubmit = async (event: Event) => {
  event.preventDefault()
  const res = await signInEmailPassword(email.value, password.value)
  debugger
  either(res, log, () => router.push('/'))
}
</script>

<template>
  <form @submit="handleSubmit">
    <input v-model="email" type="email" placeholder="Email" class="input">
    <br>
    <input v-model="password" type="password" placeholder="Password" class="input">
    <br>

    <button class="btn-submit" type="submit">
      Sign in
    </button>
  </form>
</template>
