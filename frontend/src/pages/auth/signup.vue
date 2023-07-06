<script setup lang="ts">
import { useSignUpEmailPassword } from '@nhost/vue'
import { useRouter } from 'vue-router'
import { tryCatch } from '../../utils/error'
import { either } from '../../utils/monads'
import { log } from '../../utils/log'
import { signUpEmailPassword } from '../../services/auth'
import { URL_FIRST } from '../../router'

const SignUpEmailPassword = useSignUpEmailPassword()

const router = useRouter()

const email = ref('')
const password = ref('')
const handleSubmit = async (event: Event) => {
  event.preventDefault()
  const res = await signUpEmailPassword(email.value, password.value)
  either(res, log, () => router.push(URL_FIRST))
}
</script>

<template>
  <form @submit="handleSubmit">
    <input v-model="email" type="email" placeholder="Email" class="input">
    <br>
    <input v-model="password" type="password" placeholder="Password" class="input">
    <br>

    <button class="btn-submit" type="submit">
      Sign up
    </button>
  </form>
</template>

<route lang="yaml">
meta:
  requiresNotAuth: true
</route>
