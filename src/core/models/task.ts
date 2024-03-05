export type TaskStatus = 'progress' | 'end'

export interface Task {
  uuid: string
  name: string
  description: string
  status: TaskStatus
}

export type TaskCreation = Task
