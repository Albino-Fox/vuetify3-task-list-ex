const taskForm = {
  state: {
    maxCharacters: 250,
    text: "",
    isImportant: false,
  },

  getters: {
    isValid() {
      return (text) => text.length > 0 && text.trim() !== "";
    },
  },

  actions: {
    setTaskText(context, text) {
      context.commit("setTaskText", text);
    },
    setFormImportant({ commit }, condition) {
      commit("setFormImportant", condition);
    },
  },

  mutations: {
    setTaskText(state, text) {
      state.text = text;
    },
    resetTaskForm(state) {
      state.isImportant = false;
      state.text = "";
    },
    setFormImportant(state, condition) {
      state.isImportant = condition;
    },
  },
};

export default taskForm;
