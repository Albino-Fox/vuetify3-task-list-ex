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
    addTask(context, info) {
      info.id = context.state.nextId;
      context.commit("addTask", info);
    },
    removeTask({ commit }, id) {
      commit("removeTask", id);
    },
    toggleImportant({ commit }, info) {
      commit("toggleImportant", info);
    },
  },

  mutations: {
    setTasks(state, tasks) {
      state.tasks = tasks;
      state.nextId = tasks.length;
    },
    addTask(state, task) {
      state.tasks.push(task);
      state.nextId++;
    },
    removeTask(state, id) {
      state.tasks.splice(
        state.tasks.findIndex((cur) => cur.id === id),
        1
      );
    },
    toggleImportant(state, task) {
      task.isImportant = !task.isImportant;
    },
  },
});

export default store;
