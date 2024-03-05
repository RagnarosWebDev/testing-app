<script setup lang="ts">
import { Task, TaskStatus } from '@models/task.ts'
import TaskStatusChange from '@common/taskStatus/TaskStatusChange.vue'

defineProps<{
  task: Task
  onStatusChange: (status: TaskStatus) => void
}>()
</script>

<template>
  <VCard class="ma-auto" width="700">
    <VCardTitle>Создание Задачи</VCardTitle>
    <VCardText>
      <VCardTitle>{{ task.name }}</VCardTitle>
      <VCardText>
        <div
          class="border rounded-sm pa-3 mt-2 mb-2"
          v-html="task.description"
        ></div>

        <TaskStatusChange
          :modelValue="task.status"
          @update:modelValue="(e) => onStatusChange(e)"
        />
      </VCardText>
    </VCardText>
  </VCard>
</template>

<style scoped lang="scss"></style>
