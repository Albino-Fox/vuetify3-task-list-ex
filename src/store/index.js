import { createStore } from "vuex";
import data from "@/api/index";
import taskForm from "@/store/modules/taskForm";

const store = createStore({
  modules: {
    taskForm: taskForm,
  },

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
      data.getTasks((tasks) => {
        commit("setTasks", tasks);
      });
    },
    addTask(context) {
      if (context.getters.isValid(context.state.taskForm.text)) {
        let task = {
          text: context.state.taskForm.text,
          isImportant: context.state.taskForm.isImportant,
          id: context.state.nextId,
          isDone: false,
        };
        context.commit("addTask", task);
        context.commit("resetTaskForm", null, { root: true });
      }
    },
    removeTask({ commit }, id) {
      commit("removeTask", id);
    },
    toggleImportant({ commit }, task) {
      commit("toggleImportant", task);
    },
    toggleDone({ commit }, task) {
      commit("toggleDone", task);
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
    toggleDone(state, task) {
      task.isDone = !task.isDone;
    },
  },
});

export default store;
