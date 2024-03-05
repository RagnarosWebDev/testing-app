<script setup lang="ts">
import { Task, TaskStatus } from '@models/task.ts'
import TaskStatusChange from '@common/taskStatus/TaskStatusChange.vue'

const { onStatusChanger } = defineProps<{
  task: Task
  onUpdateStatus: (status: TaskStatus) => void
  onStatusChanger: () => void
  onTaskVisualize: () => void
}>()

const onStaus = (e) => {
  e.stopPropagation()
  onStatusChanger()
}
</script>

<template>
  <VCard class="task" variant="outlined" @click="onTaskVisualize">
    <VCardTitle>{{ task.name }}</VCardTitle>

    <VCardActions class="task-actions">
      <TaskStatusChange
        :modelValue="task.status"
        @update:modelValue="(e) => onUpdateStatus(e)"
      />
      <VBtn variant="outlined" :block="true" @click="onStaus"
        >Редактировать</VBtn
      >
    </VCardActions>
  </VCard>
</template>

<style scoped lang="scss">
.task {
  &-actions {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
}
</style>
