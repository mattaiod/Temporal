<script setup lang="ts">
import type { TaskBacklogModel } from '../models/taskBacklog'
import type { Nullable } from '../utils/types'
import { userStore } from '../stores/user'

// transformTodayDateToFormat to YYYY/MM/DD
const transformTodayDateToFormat = (date: Date) => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  return `${year}/${month}/${day}`
}

class NewDayPlanning {
  date: string
  ListTask: TaskBacklogModel[]
  ListTaskPriorityMax3: TaskBacklogModel[]

  constructor() {
    this.date = transformTodayDateToFormat(new Date())
    this.ListTask = []
    this.ListTaskPriorityMax3 = []
  }
}
interface LabelValue { label: string; value: string }
const ST = reactive({
  NewDayPlanning: null as Nullable<NewDayPlanning>,
  ListTaskBacklog: [] as LabelValue[],
})

const FN = {
  mkAddDayPlanning() {
    ST.NewDayPlanning = new NewDayPlanning()
  },

  insertDayPlanning() {
    if (ST.NewDayPlanning === null)
      return
    // userStore().insertDayPlanning(ST.NewDayPlanning)
  },

}

const loadData = async () => {
  await userStore().loadAllDataUser()
  userStore().data?.backlog[0]?.ListTask?.forEach((task) => {
    ST.ListTaskBacklog.push({ label: task.title, value: task.id })
  })
}

loadData()
</script>

<template>
  <div>
    <h1>
      Day Planning
    </h1>
    <q-btn label="make a day Planning" @click="FN.mkAddDayPlanning()" />

    <div v-if="ST.NewDayPlanning !== null">
      <div class="q-pa-md">
        <div class="q-gutter-md row items-start">
          <q-date v-model="ST.NewDayPlanning.date" minimal />
        </div>
      </div>

      <div>
        <q-select v-model="ST.NewDayPlanning.ListTask" label="Tâches du Backlog" filled :options="ST.ListTaskBacklog"
          multiple />
      </div>
      <div>
        <q-select v-model="ST.NewDayPlanning.ListTaskPriorityMax3" label="Tâches prioritaires" filled
          :options="ST.ListTaskBacklog" multiple />
      </div>
    </div>

    <q-btn label="save" @click="FN.insertDayPlanning()" />
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
  requiresAuth: true
  </route>

