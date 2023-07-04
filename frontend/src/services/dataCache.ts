import { dataStore } from "../stores/data"
import { userStore } from "../stores/user"
import { ErrorFatalNever, ErrorFetch } from "../utils/error"
import { isNotNull, isNull } from '../utils/logic'
import { type Either, left, right } from '../utils/monads'
import type { ResAPI } from "../utils/types"
import type { AllDataUser } from './graphQL'
import { fetchAllData_User } from './graphQL'

export const tryCatchRequest = async <T>(fn: () => Promise<ResAPI<T>>): Promise<Either<ErrorFetch,T>> => {
  try {
    const res = await fn()
    if (isNotNull(res.error))
      return left(new ErrorFetch("Failed to fetch data"))
    else
      return isNull(res.data) ? left(new ErrorFetch("Failed to fetch data")) : right(res.data) 
  }
  catch (err: any) {
    return left(new ErrorFetch(err))
  }
}

const loadAllDataUser = async (): Promise<Either<ErrorFetch, AllDataUser>> => {
  const UserStore = userStore().user

  if (isNull(UserStore)) {
    return left(new ErrorFatalNever("UserStore is null"))
  }
  else {
    const res = await tryCatchRequest(() => fetchAllData_User(UserStore.id))
    return res
  }


  


      dataStore().value = res.data
  }
}
