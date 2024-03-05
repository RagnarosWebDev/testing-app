import { defineStore } from 'pinia'
import { Task, TaskCreation, TaskStatus } from '@models/task.ts'

export interface TaskState {
  tasks: Task[]
}

export const useTasks = defineStore('tasks', {
  persist: true,
  state(): TaskState {
    return {
      tasks: [],
    }
  },
  actions: {
    createNewTask(dto: TaskCreation) {
      this.tasks.push({
        ...dto,
      })
    },
    changeStatus(taskId: string, status: TaskStatus) {
      this.tasks.forEach((e) => {
        if (e.uuid != taskId) return

        e.status = status
      })
    },
    updateTask(task: Task) {
      const index = this.tasks.findIndex((e) => e.uuid == task.uuid)
      this.tasks.splice(index, 1)
      this.tasks.push(task)
    },
  },
  getters: {
    filtered: function () {
      return (text: string, status: TaskStatus) => {
        const lowerCase = text.toLowerCase()
        return this.tasks.filter(
          (e) =>
            (e.name.toLowerCase().includes(lowerCase) ||
              e.description.includes(lowerCase)) &&
            status == e.status,
        )
      }
    },
  },
})
