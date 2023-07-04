import { dataStore } from "../stores/data"
import { userStore } from "../stores/user"
import type { Fatal } from "../utils/error"
import { ErrorFatalNever } from "../utils/error"
import { isNull } from '../utils/logic'
import { type Either, Left, either, ifLeft, ifRight, left } from '../utils/monads'
import type { AllDataUser, ErrorResFetch, ResFetch } from './graphQL'
import { fetchAllData_User } from './graphQL'

// export const loadAllDataUser = async (): Promise<Either<Fatal<ErrorResFetch>, AllDataUser>> => {
//   const UserStore = userStore().user

//   if (isNull(UserStore)) { return left(new ErrorFatalNever("UserStore is null")) }
//   else {
//     return ifRight(await fetchAllData_User(UserStore.id),
//       dataStore().setValue)
//   }
// }

