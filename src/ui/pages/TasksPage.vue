<script setup lang="ts">
import { useTasks } from '@store/task.store.ts'
import { storeToRefs } from 'pinia'
import TaskComponent from '@common/baseTypes/Task.vue'
import { Ref, ref } from 'vue'
import { Task, TaskCreation, TaskStatus } from '@models/task.ts'
import CreateTaskDialog from '@common/dialogs/CreateTaskDialog.vue'
import UpdateTaskDialog from '@common/dialogs/UpdateTaskDialog.vue'
import TaskDialog from '@common/dialogs/TaskDialog.vue'

const tasksStore = useTasks()
const { filtered } = storeToRefs(tasksStore)

const search = ref('')
const status = ref<TaskStatus>('progress')
const isEditOpened = ref(false)
const candidate = ref<Task | null>(null)
const isShowOpened = ref(false)

const onCreateTask = (task: TaskCreation, isActive: Ref<boolean>) => {
  tasksStore.createNewTask(task)
  isActive.value = false
}

const onStartEditTask = (task: Task) => {
  candidate.value = task
  isEditOpened.value = true
}

const onEndEditTask = (task: Task) => {
  candidate.value = null
  tasksStore.updateTask(task)
  isEditOpened.value = false
}
const onStartShowTask = (task: Task) => {
  candidate.value = task
  isShowOpened.value = true
}
</script>

<template>
  <div class="pa-3 tasks-container">
    <div class="filters">
      <VTabs class="mb-3" alignTabs="center" v-model="status">
        <VTab value="progress">В процессе</VTab>
        <VTab value="end">Закончено</VTab>
      </VTabs>
      <VTextField
        variant="outlined"
        placeholder="Поиск"
        :hideDetails="true"
        v-model="search"
        class="mb-3"
      />

      <VDialog>
        <template #activator="{ props: activator }">
          <VBtn
            variant="outlined"
            width="200"
            class="mx-auto mb-3"
            v-bind="activator"
          >
            Добавить
          </VBtn>
        </template>
        <template #default="{ isActive }">
          <CreateTaskDialog
            :onCreate="(e: TaskCreation) => onCreateTask(e, isActive)"
          />
        </template>
      </VDialog>
    </div>
    <div class="task-list">
      <TaskComponent
        :key="task.uuid"
        v-for="task of filtered(search, status)"
        :task="task"
        :onUpdateStatus="
          (newTaskStatus: TaskStatus) =>
            tasksStore.changeStatus(task.uuid, newTaskStatus)
        "
        :onStatusChanger="() => onStartEditTask(task)"
        :onTaskVisualize="() => onStartShowTask(task)"
      />
    </div>

    <v-dialog v-model="isEditOpened">
      <template #default="{}">
        <UpdateTaskDialog
          v-if="candidate"
          :onUpdate="onEndEditTask"
          :taskToEdit="candidate"
        />
      </template>
    </v-dialog>

    <v-dialog v-model="isShowOpened">
      <template #default="{}">
        <TaskDialog
          v-if="candidate"
          :task="candidate"
          :onStatusChange="
            (newTaskStatus: TaskStatus) =>
              tasksStore.changeStatus(candidate!.uuid, newTaskStatus)
          "
        />
      </template>
    </v-dialog>
  </div>
</template>

<style scoped lang="scss">
.tasks-container {
  display: grid;
  grid-template-rows: auto 1fr;
  height: 100%;

  .filters {
    display: flex;
    flex-direction: column;
  }
}
.task-list {
  display: grid;
  gap: 20px;
  overflow: scroll;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: min-content;

  @media (max-width: 1050px) {
    grid-template-columns: 1fr 1fr;
  }

  &::-webkit-scrollbar {
    display: none;
  }

  .task {
    height: min-content;
  }
}
</style>
