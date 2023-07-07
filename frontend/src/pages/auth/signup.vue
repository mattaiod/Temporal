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
  <div>
    <q-card-section>
      <q-form class="q-gutter-md">
        <q-input v-model="email" square filled clearable type="email" label="email" />
        <q-input v-model="password" square filled clearable type="password" label="password" />
      </q-form>
    </q-card-section>
    <q-card-actions class="q-px-md">
      <q-btn @click="handleSubmit" color="light-green-7" size="lg" class="full-width" label="Créer un compte" />
    </q-card-actions>
  </div>
</template>

<route lang="yaml">
meta:
  requiresNotAuth: true
</route>
