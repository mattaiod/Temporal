import { hydrateStrict } from '../utils/object'
import { type BaseModel, _BaseModel } from './_base'
import { Task_Base } from './task_base'
import type { Either } from '~/utils/monads'
import { left, right } from '~/utils/monads'

type IdTaskDayPlanning = string & { readonly __tag: unique symbol }

export class TaskDayPlanningModel extends Task_Base<IdTaskDayPlanning> {
  timeBegin!: Date
  timeEnd!: Date

  protected constructor(obj: BaseModel<Task_Base<IdTaskDayPlanning>, IdTaskDayPlanning>) {
    super(obj)
    hydrateStrict(this, obj)
  }

  static make(obj: BaseModel<Task_Base<IdTaskDayPlanning>, IdTaskDayPlanning>): Either<never, TaskDayPlanningModel> {
    return right(new this(obj))
  }
}
