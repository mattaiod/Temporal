import { hydrate } from '../utils/object'
import type { UserModel } from './user'

export class _BaseModel<T> {
  id!: T
  createdAt!: Date
  updatedAt!: Date
  created_by!: UserModel

  protected constructor(obj: _BaseModel<T>) {
    hydrate(this, obj)
  }

  private _uniqBaseModel = null
}

export type BaseModel<T, Id> = _BaseModel< Id > & T

