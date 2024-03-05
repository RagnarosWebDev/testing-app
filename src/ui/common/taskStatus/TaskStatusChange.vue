<script setup lang="ts">
import { ref, watch } from 'vue'
import { TaskStatus } from '@models/task.ts'

const { modelValue } = defineProps<{
  modelValue: TaskStatus
}>()

const emit = defineEmits(['update:modelValue'])

const status = ref<'В процессе' | 'Закончена'>(
  modelValue == 'progress' ? 'В процессе' : 'Закончена',
)

watch(status, () => {
  emit('update:modelValue', status.value == 'В процессе' ? 'progress' : 'end')
})
</script>

<template>
  <VSelect
    :items="['В процессе', 'Закончена']"
    v-model="status"
    class="selector mt-5 mb-3"
    variant="outlined"
    :hideDetails="true"
  ></VSelect>
</template>

<style scoped lang="scss">
.selector {
  width: 100%;
}
</style>
