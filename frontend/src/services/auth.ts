import { nhost } from '~/modules/nhost'
import { ifElse, ifElseEither } from '~/utils/condition'
import { tryCatch } from '~/utils/error'
import { isNotNull, isNull } from '~/utils/logic'
import { left, right } from '~/utils/monads'

export const signUpEmailPassword = async (email: string, password: string) => {
  return await tryCatch(
    async () => {
      const res = await nhost.auth.signUp({ email, password })
      return ifElseEither(isNull(res.error), () => "failed", () => res)
    },
    () => left("failed"),
  )
}

export const signInEmailPassword = async (email: string, password: string) => {
  return await tryCatch(
    async () => {
      const res = await nhost.auth.signIn({ email, password })
      return ifElseEither(isNull(res.error), () => "failed", () => res)
    },
    () => left("failed"),
  )
}

export const signOut = async () => {
  return await tryCatch(
    async () => {
      const res = await nhost.auth.signOut()
      return ifElseEither(isNull(res.error), () => "failed", () => res)
    },
    () => left("failed"),
  )
}

