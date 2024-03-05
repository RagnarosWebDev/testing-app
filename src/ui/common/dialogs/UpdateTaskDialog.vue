<script setup lang="ts">
import { ref } from 'vue'
import { Task } from '@models/task.ts'
import TaskStatusChange from '@common/taskStatus/TaskStatusChange.vue'
import Editor from 'primevue/editor'

const { taskToEdit } = defineProps<{
  onUpdate: (task: Task) => void
  taskToEdit: Task
}>()

const task = ref<Task>({
  ...taskToEdit,
})
console.log(taskToEdit)
</script>

<template>
  <VCard class="ma-auto" width="700">
    <VCardTitle>Обновление Задачи</VCardTitle>
    <VCardText>
      <VForm @submit.prevent="() => onUpdate(task)">
        <VTextField
          v-model="task.name"
          placeholder="Имя"
          variant="outlined"
          class="mb-6"
          :hideDetails="true"
        />
        <Editor v-model="task.description" editorStyle="height: 320px" />
        <TaskStatusChange v-model="task.status" />

        <VBtn :block="true" variant="outlined" type="submit">Обновить</VBtn>
      </VForm>
    </VCardText>
  </VCard>
</template>

<style scoped></style>
