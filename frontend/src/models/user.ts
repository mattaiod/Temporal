import { hydrateStrict } from '../utils/object'
import { _BaseModel } from './_base'

export type IdUser = string & { readonly __tag: unique symbol }

export class UserModel extends _BaseModel<IdUser> {
  email!: string

  protected constructor(obj: UserModel) {
    super(obj)
    hydrateStrict(this, obj)
  }

  static make(obj: UserModel): UserModel {
    return new this(obj)
  }
}

