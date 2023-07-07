import type { User } from '@nhost/vue'
import { defineStore } from 'pinia'
import type { Just, Maybe } from '../utils/monads'
import { Nothing, isNothing, nothing } from '../utils/monads'
import type { Nullable } from '../utils/types'
import { PriorityModel } from '../models/_enum'
import { TaskBacklogModel } from './../models/taskBacklog'
import { ErrorFatalNever, ErrorUpdateFailed } from './../utils/error'
import { type AllDataUser, fetchAllData_User, insertDayPlanning, insertDayPlanningQL, insertTaskBacklog, updateTaskBacklog } from './../services/graphQL'
import type { IdTaskBacklog, TaskBacklogInsert } from '~/models/taskBacklog'

export const userStore = defineStore('user', {
  state: () => ({
    user: null as Nullable<User>,
    data: null as Nullable<AllDataUser>,
  }),
  actions: {
    async loadAllDataUser(): Promise<AllDataUser> {
      if (this.data === null) {
        if (this.user === null) {
          throw new ErrorFatalNever("User is null")
        }
        else {
          const res = await fetchAllData_User(this.user.id)
          this.data = res
          return res
        }
      }
      else {
        return this.data as AllDataUser
      }
    },
    async insertTask(Task: { title: string; description: string; backlog_id: string }) {
      const TaskForInsert: TaskBacklogInsert = {
        priority: "low",
        status: "notStarted",
        title: Task.title,
        description: Task.description,
        user_id: this.user?.id as IdTaskBacklog,
        backlog_id: Task.backlog_id,
      }

      const ResInsert = (await insertTaskBacklog(TaskForInsert))
      if (ResInsert === undefined)
        throw new ErrorUpdateFailed("Failed to insert task")

      const TaskForModel = TaskBacklogModel.make({
        id: ResInsert.id,
        createdAt: ResInsert.createdAt,
        updatedAt: ResInsert.updatedAt,
        deadline: ResInsert.deadline,
        title: Task.title,
        description: Task.description,
        priority: "low",
        status: "notStarted",
      })

      this.data?.backlog[0]?.ListTask.unshift(TaskForModel)

      return TaskForModel
    },

    async updateTask(Task: TaskBacklogModel) {
      const resUpdate = await updateTaskBacklog(Task)
      if (resUpdate === undefined)
        throw new ErrorUpdateFailed("Failed to update task")

      // Update the task in the store
      const TaskToUpdate = this.data?.backlog[0]?.ListTask.find(t => t.id === Task.id)
      if (TaskToUpdate === undefined)
        throw new ErrorUpdateFailed("Failed to update task")

      TaskToUpdate.title = Task.title
      TaskToUpdate.description = Task.description

      return TaskToUpdate
    },

    async deleteTask(IdTask: IdTaskBacklog) {
      const TaskToDelete = this.data?.backlog[0]?.ListTask.find(t => t.id === IdTask)
      if (TaskToDelete === undefined)
        throw new ErrorUpdateFailed("Failed to delete task")

      const resDelete = await updateTaskBacklog(TaskToDelete)
      if (resDelete === undefined)
        throw new ErrorUpdateFailed("Failed to delete task")

      this.data?.backlog[0]?.ListTask.splice(this.data.backlog[0].ListTask.indexOf(TaskToDelete), 1)
    },

    async insertDayPlanning(date: Date, ListTask: TaskBacklogModel[], ListTaskPriorityMax3: TaskBacklogModel[]) {
      const res = await insertDayPlanningQL(date, ListTask, ListTaskPriorityMax3, this.user?.id)
      this.data = res
    },
  },

})

