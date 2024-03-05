<script setup lang="ts">
import { ref } from 'vue'
import { TaskCreation } from '@models/task.ts'
import { createUUID } from '@/utils/uuid.ts'
import TaskStatusChange from '@common/taskStatus/TaskStatusChange.vue'
import Editor from 'primevue/editor'
import 'primevue/resources/themes/md-dark-indigo/theme.css'

defineProps<{
  onCreate: (task: TaskCreation) => void
}>()

const task = ref<TaskCreation>({
  name: '',
  description: '',
  status: 'progress',
  uuid: createUUID(),
})
</script>

<template>
  <VCard class="ma-auto" width="700">
    <VCardTitle>Создание Задачи</VCardTitle>
    <VCardText>
      <VForm @submit.prevent="() => onCreate(task)">
        <VTextField v-model="task.name" placeholder="Имя" variant="outlined" />
        <Editor v-model="task.description" editorStyle="height: 320px" />
        <TaskStatusChange v-model="task.status" />

        <VBtn :block="true" variant="outlined" type="submit">Создать</VBtn>
      </VForm>
    </VCardText>
  </VCard>
</template>

<style scoped></style>
