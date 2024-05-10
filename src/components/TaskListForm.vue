<template>
  <v-form id="task-form">
    <v-container class="d-flex flex-row align-start">
      <v-text-field
        v-model="taskText"
        variant="outlined"
        label="Task title"
        counter
        :maxlength="maxCharacters"
      />
      <v-checkbox v-model="isImportant" />
      <v-btn
        type="button"
        @click="sendTaskInfo"
      >
        Add
      </v-btn>
    </v-container>
  </v-form>
</template>

<script>
export default {
  name: "TaskListForm",

  data: () => ({
    taskText: "",
    isImportant: false,
    maxCharacters: 250,
  }),

  methods: {
    sendTaskInfo() {
      let task = {
        text: this.taskText,
        isImportant: this.isImportant,
      };
      this.$emit("addTask", task);
    },
  },
};
</script>
