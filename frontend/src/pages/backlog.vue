<script setup lang="ts">
import type { BacklogModel } from '../models/backlog'
import type { Maybe } from '../utils/monads'
import { either, nothing } from '../utils/monads'
import { userStore } from '../stores/user'
import { tryCatch } from '../utils/error'
import type { Nullable } from '../utils/types'
import { cD } from '../utils/function'
import type { TaskBacklogModel } from '../models/taskBacklog'
import { TaskBacklogInsert } from '../models/taskBacklog'

class Task {
  constructor(public title: string, public description: string) {
  }

  static init() {
    return new Task("", "")
  }
}

type AddOrEdit = 'add' | 'edit'

const ST = reactive({
  Backlog: null as Nullable<BacklogModel>,
  CurrentTask: null as Nullable<Task>,
  CurrentEditTask: null as Nullable<TaskBacklogModel>,
})

const CP = {
  addOrEditCurrentTask: computed(() => ST.CurrentEditTask === null ? 'add' : 'edit'),
}

const FN = {
  mkEditTask(task: TaskBacklogModel) {
    ST.CurrentEditTask = cD(task)
  },
  mkAddTask() {
    ST.CurrentTask = Task.init()
  },
}

const FNA = {

  async insertTask() {
    if (ST.Backlog === null)
      return
    const obj = { ...ST.CurrentTask, backlog_id: ST.Backlog.id }
    try {
      const res = await userStore().insertTask(obj)
      FN.mkAddTask()
    }
    catch
    (e) {
      console.error(e)
    }
  },

  async updateTask() {
    try {
      const res = await userStore().updateTask(ST.CurrentTask)

      FN.mkAddTask()
    }
    catch
    (e) {
      console.error(e)
    }
  },
}

const loadData = async () => {
  ST.CurrentTask = Task.init()
  try {
    const res = (await userStore().loadAllDataUser()).backlog[0]
    if (res === undefined)
      console.log('No backlog')
    else
      ST.Backlog = res
  }
  catch
  (e) {
    console.error(e)
  }
}

loadData()
</script>

<template>
  <div>
    <h1>
      Backlog
    </h1>

    <q-btn v-if="CP.addOrEditCurrentTask.value === 'edit'" label="Add Task" @click="FN.mkAddTask()" />

    <q-card class="q-mb-md">
      <div v-if="CP.addOrEditCurrentTask.value === 'add' && ST.CurrentTask">
        <q-input v-model="ST.CurrentTask.title" label="Title" />
        <q-input v-model="ST.CurrentTask.description" label="Description" />
        <q-btn label="Valider" @click="FNA.insertTask()" />
      </div>

      <div v-if="CP.addOrEditCurrentTask.value === 'edit' && ST.CurrentEditTask">
        <q-input v-model="ST.CurrentEditTask.title" label="Title" />
        <q-input v-model="ST.CurrentEditTask.description" label="Description" />
        <q-btn label="Valider" @click="FNA.updateTask()" />
      </div>
    </q-card>

    <div v-if="ST.Backlog !== null">
      <div v-for="task in ST.Backlog.ListTask" :key="task.id" class="bg-fuchsia-800">
        <div>
          {{ task.title }}
          <div>
            {{ task.description }}
          </div>
        </div>
        <q-btn label="Edit" @click="FNA.mkEditTask(task)" />
        <q-btn label="Delete" @click="FNA.deleteTask(task)" />
      </div>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
  requiresAuth: true
  </route>

