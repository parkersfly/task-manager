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

    async fetchTasks(projectId) {
      const { data } = await api.get(`/projects/${projectId}/tasks`)
      this.tasks = data
    },
  }
})