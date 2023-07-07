import { hydrateStrict } from '../utils/object'
import { type BaseModel, _BaseModel } from './_base'
import type { PriorityModel, StatusTaskModel } from './_enum'
import { Task_Base } from './task_base'
import { type Either, left, right } from '~/utils/monads'

export type IdTaskBacklog = string & { readonly __tag: unique symbol }
export class TaskBacklogModel extends Task_Base<IdTaskBacklog> {
  protected constructor(obj: BaseModel<Task_Base<IdTaskBacklog>, IdTaskBacklog>) {
    super(obj)
    hydrateStrict(this, obj)
  }

  static make(obj: BaseModel<Task_Base<IdTaskBacklog>, IdTaskBacklog>): TaskBacklogModel {
    return new this(obj)
  }
}

export interface TaskBacklogInsert {
  priority: PriorityModel
  status: StatusTaskModel
  title: string
  description: string
  user_id: string
  backlog_id?: string
}
