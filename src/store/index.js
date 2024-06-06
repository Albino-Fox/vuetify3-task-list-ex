import { createStore } from "vuex";
import taskList from "@/api/index";

const store = createStore({
  state: {
    tasks: [],
    nextId: 0,

    //TaskListForm
    taskText: "",
    isImportant: false,
    maxCharacters: 250,
  },
  getters: {
    tasks(state) {
      return state.tasks;
    },

    isValid() {
      return (taskText) => taskText.length > 0 && taskText.trim() !== "";
    },
  },

  actions: {
    fetchTasks({ commit }) {
      taskList.getTasks((tasks) => {
        commit("setTasks", tasks);
      });
    },
    addTask(context) {
      if (context.getters.isValid(context.state.taskText)) {
        let task = {
          text: context.state.taskText,
          isImportant: context.state.isImportant,
          id: context.state.nextId,
          isDone: false,
        };
        context.commit("addTask", task);
        context.commit("resetTaskForm");
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

    //TaskListForm:
    setTaskText(context, text) {
      context.commit("setTaskText", text);
    },
    setFormImportant({ commit }, condition) {
      commit("setFormImportant", condition);
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

    //TaskListForm
    setTaskText(state, text) {
      state.taskText = text;
    },
    resetTaskForm(state) {
      state.isImportant = false;
      state.taskText = "";
    },
    setFormImportant(state, condition) {
      state.isImportant = condition;
    },
  },
});

export default store;
