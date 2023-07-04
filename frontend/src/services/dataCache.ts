import { dataStore } from "../stores/data"
import { userStore } from "../stores/user"
import type { Fatal } from "../utils/error"
import { ErrorFatalNever } from "../utils/error"
import { always, compose, compose2, doAndReturn, doAndReturnC } from "../utils/function"
import { isNotNull, isNull } from '../utils/logic'
import { type Either, Left, either, left, right, rightDoAndReturnC } from '../utils/monads'
import { set, setC } from "../utils/object"
import type { ResAPI } from "../utils/types"
import type { AllDataUser, ErrorResFetch, ResFetch } from './graphQL'
import { fetchAllData_User } from './graphQL'

const loadAllDataUser = async (): Promise<Either<Fatal<ErrorResFetch>, AllDataUser>> => {
  const UserStore = userStore().user

  if (isNull(UserStore)) { return left(new ErrorFatalNever("UserStore is null")) }

  else {
    const res = await fetchAllData_User(UserStore.id)

    return either(res,
      compose2(left, always),
      rightDoAndReturnC(re => setC(dataStore(), "value")(re)),
    )
  }
  // set(dataStore(), "value", res)
  // return doAndReturn(setC(dataStore(), "value"))
  // return right(doAndReturn(res, setC(dataStore(), "value")))
  //     const xx =
  //     const x = doAndReturnC(setC(dataStore(), "value"))
  //     // return right(always(res))
  // })

  // return either(res,
  //   (res) => left(always(res)),
  //   (res) => {
  //     dataStore().value = res
  //     return right(always(res))
  // })

  // if (res instanceof Left)
  //   return res
  // else {
  //   dataStore().value = res.from()
  //   return res
  // }

  // dataStore().value = data
  // doAndReturn(setC(dataStore(), "value")
}

