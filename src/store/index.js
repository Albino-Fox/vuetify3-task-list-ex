import { createStore } from "vuex";
import taskList from "@/api/index";

const store = createStore({
  state: {
    tasks: [],
    nextId: 0,
  },
  getters: {
    tasks(state) {
      return state.tasks;
    },
  },

  actions: {
    fetchTasks({ commit }) {
      taskList.getTasks((tasks) => {
        commit("setTasks", tasks);
      });
    },
  },

  mutations: {
    setTasks(state, tasks) {
      state.tasks = tasks;
    },
    addTask(state, task) {
      state.tasks.push(task);
    },
    incrementId(state) {
      state.nextId++;
    },
  },
});

export default store;
