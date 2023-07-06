<script setup lang="ts">
import { useSignUpEmailPassword } from '@nhost/vue'
import { useRouter } from 'vue-router'
import { gql } from '@apollo/client/core'
import { tryCatch } from '../../utils/error'
import { either } from '../../utils/monads'
import { log } from '../../utils/log'
import { signUpEmailPassword } from '../../services/auth'
import { URL_FIRST } from '../../router'
import { nhost } from '../../modules/nhost'

const SignUpEmailPassword = useSignUpEmailPassword()

const router = useRouter()

const email = ref('')
const password = ref('')
const handleSubmit = async (event: Event) => {
  event.preventDefault()
  const ResSignup = await signUpEmailPassword(email.value, password.value)

  // const Request = gql`
  //   mutation InsertBacklog($user_id: uuid) {
  //     insert_backlog(objects: {user_id: $user_id}) {
  //       returning {
  //         createdAt
  //         updatedAt
  //         id
  //       }
  //     }
  //   }
  // `

  // const res = await nhost.graphql.request(Request, { user_id: ResSignup.value.session.user.id })

  either(ResSignup, log, () => router.push(URL_FIRST))
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
