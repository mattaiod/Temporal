import { dataStore } from "../stores/data"
import { userStore } from "../stores/user"
import type { Fatal } from "../utils/error"
import { ErrorFatalNever } from "../utils/error"
import { always, compose } from "../utils/function"
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
    return either(await fetchAllData_User(UserStore.id),
      compose(left, always),
      dataStore().setValue)
  }
}

