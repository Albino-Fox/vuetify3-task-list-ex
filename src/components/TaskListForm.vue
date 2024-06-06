<template>
  <v-form
    id="task-form"
    @keydown.enter.prevent
    @keydown.enter="addTask"
  >
    <v-container class="d-flex flex-row align-center">
      <v-text-field
        v-model="taskText"
        variant="outlined"
        label="Task title"
        counter
        :maxlength="maxCharacters"
      >
        <template #append>
          <v-checkbox-btn
            v-model="isImportant"
            :false-icon="'mdi-star-outline'"
            :true-icon="'mdi-star'"
            :color="'secondary'"
            class="align-self-center pr-4"
          />
          <v-btn
            type="button"
            @click="addTask"
          >
            Add
          </v-btn>
        </template>
      </v-text-field>
    </v-container>
  </v-form>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  name: "TaskListForm",

  computed: {
    ...mapState({
      maxCharacters: "maxCharacters",
    }),
    isImportant: {
      get() {
        return this.$store.state.isImportant;
      },
      set(condition) {
        this.setFormImportant(condition);
      },
    },
    taskText: {
      get() {
        return this.$store.state.taskText;
      },
      set(text) {
        this.setTaskText(text);
      },
    },
  },

  methods: {
    ...mapGetters({
      isValid: "isValid",
    }),
    ...mapActions({
      addTask: "addTask",
      setFormImportant: "setFormImportant",
      setTaskText: "setTaskText",
    }),
  },
};
</script>
