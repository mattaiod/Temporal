import { type BaseModel, _BaseModel } from "./_base"

import type { PriorityModel, StatusTaskModel } from "./_enum"
import { hydrateStrict } from "~/utils/object"

export class Task_Base<T> extends _BaseModel<T> {
  title!: string
  description!: string
  deadline!: Date
  priority!: PriorityModel
  status!: StatusTaskModel

  protected constructor(obj: BaseModel<Task_Base<T>, T>) {
    super(obj)
    hydrateStrict(this, obj)
  }

  private _uniqTask_Base = null
}
