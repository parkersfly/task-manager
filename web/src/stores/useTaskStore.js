import { defineStore } from 'pinia'

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
})