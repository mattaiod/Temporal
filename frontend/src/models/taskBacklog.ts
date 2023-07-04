import { hydrateStrict } from '../utils/object'
import { type BaseModel, _BaseModel } from './_base'
import type { PriorityModel, StatusTaskModel } from './_enum'
import { Task_Base } from './task_base'
import { isNotNull } from '~/utils/logic'
import type { ErrorValueForbidden } from '~/utils/error'
import { type Either, left, right } from '~/utils/monads'

type IdTaskBacklog = string & { readonly __tag: unique symbol }

export class TaskBacklogModel extends Task_Base<IdTaskBacklog> {
  protected constructor(obj: BaseModel<Task_Base<IdTaskBacklog>, IdTaskBacklog>) {
    super(obj)
    hydrateStrict(this, obj)
  }

  static make(obj: BaseModel<Task_Base<IdTaskBacklog>, IdTaskBacklog>): Either<never, TaskBacklogModel> {
    return right(new this(obj))
  }
}
