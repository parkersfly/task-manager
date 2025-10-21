<template>
  <div v-if="store.selectedProject">
    <div class="d-flex justify-content-between align-items-center mb-3">
      <h4>{{ store.selectedProject.name }}</h4>
      <TaskForm />
    </div>

    <div class="row">
      <TaskColumn title="Pendente" :tasks="pendingTasks" @change-status="updateTaskStatus" />
      <TaskColumn title="Em Andamento" :tasks="inProgressTasks" @change-status="updateTaskStatus" />
      <TaskColumn title="Concluído" :tasks="completedTasks" @change-status="updateTaskStatus" />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useTaskStore } from '../stores/useTaskStore'
import TaskColumn from './TaskColumn.vue'
import TaskForm from './TaskForm.vue'

const store = useTaskStore()

async function updateTaskStatus({ taskId, newStatus }) {
  await store.updateStatus(taskId, newStatus)
}

function useTasksByStatus(status) {
  return computed(() => {
    return store.tasks.filter(task =>
      task.project_id === store.selectedProjectId && task.status === status
    )
  })
}

const pendingTasks = useTasksByStatus('pendente')
const inProgressTasks = useTasksByStatus('em andamento')
const completedTasks = useTasksByStatus('concluída')
</script>
