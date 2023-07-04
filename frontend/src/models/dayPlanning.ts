import { hydrateStrict } from '../utils/object'
import { _BaseModel } from './_base'
import type { TaskDayPlanningModel } from './taskDayPlanning'
import type { ErrorValueForbidden } from '~/utils/error'
import { type Either, right } from '~/utils/monads'

type IdDayPlanning = string & { readonly __tag: unique symbol }
export class DayPlanningModel extends _BaseModel<IdDayPlanning> {
  date!: Date
  ListTask!: TaskDayPlanningModel[]
  ListTaskPriorityMax3!: ArrayMax3<TaskDayPlanningModel>

  protected constructor(obj: DayPlanningModel) {
    super(obj)
    hydrateStrict(this, obj)
  }

  static make(obj: DayPlanningModel): Either<never, DayPlanningModel> {
    return right(new this(obj))
  }
}

