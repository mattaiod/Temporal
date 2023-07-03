import { hydrate, hydrateStrict } from '../utils/object'
import { _BaseModel } from './_base'
import type { TaskBacklogModel } from './taskBacklog'
import type { ErrorValueForbidden } from '~/utils/error'
import { type Either, right } from '~/utils/monads'

type IdBacklog = string & { readonly __tag: unique symbol }
export class BacklogModel extends _BaseModel<IdBacklog> {
  ListTask!: TaskBacklogModel[]

  protected constructor(obj: BacklogModel) {
    super(obj)
    hydrateStrict(this, obj)
  }

  static make(obj: BacklogModel): Either<ErrorValueForbidden, BacklogModel> {
    return right(new this(obj))
  }
}
