<script setup lang="ts">
import type { BacklogModel } from '../models/backlog'
import type { Maybe } from '../utils/monads'
import { either, nothing } from '../utils/monads'
import { userStore } from '../stores/user'
import { tryCatch } from '../utils/error'
import type { Nullable } from '../utils/types'
import { cD } from '../utils/function'
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
  CurrentTask: Task.init(),
  addOrEdit: 'add' as AddOrEdit,

})

const CP = {

}

const FN = {
  mkEditTask(task: Task) {
    ST.CurrentTask = cD(task)
    ST.addOrEdit = 'edit'
  },

}

const FNA = {

  async insertTask() {
    if (ST.Backlog === null)
      return
    const obj = { ...ST.CurrentTask, backlog_id: ST.Backlog.id }
    try {
      const res = await userStore().insertTask(obj)
    }
    catch
    (e) {
      console.error(e)
    }
  },

}

const loadData = async () => {
  try {
    const res = (await userStore().loadAllDataUser()).backlog[0]
    debugger
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

    <q-card class="q-mb-md">
      <q-input v-model="ST.CurrentTask.title" label="Title" />
      <q-input v-model="ST.CurrentTask.description" label="Description" />
      <q-btn v-if="ST.addOrEdit === 'add'" label="Add" @click="FNA.insertTask()" />
      <q-btn v-if="ST.addOrEdit === 'edit'" label="Edit" @click="FNA.updateTask()" />
    </q-card>

    <div v-if="ST.Backlog !== null">
      <div v-for="task in ST.Backlog.ListTask" :key="task.id" class="bg-fuchsia-800" @click="FN.mkEditTask(task)">
        <div>
          {{ task.title }}
          <div>
            {{ task.description }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
  requiresAuth: true
  </route>

