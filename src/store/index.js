import { createStore } from "vuex";

const store = createStore({
  state: {
    tasks: [],
    nextId: 0,
  },
  getters: {
    tasksCount() {},
  },

  actions: {
    fetchTasks() {},
  },

  mutations: {
    setTasks(state, tasks) {
      state.tasks = tasks;
    },
  },
});

export default store;
