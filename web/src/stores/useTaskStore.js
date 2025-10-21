import { defineStore } from 'pinia'
import { api } from '../api'

export const useTaskStore = defineStore('taskStore', {
  state: () => ({
    projects: [],
    tasks: [],
    selectedProjectId: null,
    loading: false,
  }),

  getters: {
    selectedProject(state) {
      return state.projects.find(p => p.id === state.selectedProjectId)
    },
    projectTasks(state) {
      return state.tasks.filter(t => t.project_id === state.selectedProjectId)
    },
  },

  actions: {
    async fetchProjects() {
      this.loading = true
      const { data } = await api.get('/projects')
      this.projects = data
      this.loading = false
      if (!this.selectedProjectId && data.length > 0)
        this.selectedProjectId = data[0].id
      await this.fetchTasks(this.selectedProjectId)
    },

    async selectProject(id) {
      this.selectedProjectId = id
      await this.fetchTasks(id)
    },

    async fetchTasks(projectId) {
      const { data } = await api.get(`/projects/${projectId}/tasks`)
      this.tasks = data
    },

    async addTask(title) {
      const { data } = await api.post('/tasks', {
        title,
        project_id: this.selectedProjectId,
      })

      if (!data.status) {
        data.status = 'pendente'
      }

      this.tasks = [...this.tasks, data]
    },

    async updateStatus(taskId, newStatus) {
      const task = this.tasks.find(t => t.id === taskId)
      if (!task) return

      try {
        await api.put(`/tasks/${taskId}`, {
          title: task.title,
          status: newStatus,
          project_id: task.project_id,
        })

        task.status = newStatus
      } catch (error) {
        console.error('Erro ao atualizar tarefa:', error.response.data)
      }
    },
  }
})