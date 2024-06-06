<template>
  <v-form
    id="task-form"
    @keydown.enter.prevent
    @keydown.enter="sendTaskInfo"
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
            @click="sendTaskInfo"
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
  emits: ["addTask"],

  computed: {
    ...mapState({
      taskText: "taskText",
      isImportant: "isImportant",
      maxCharacters: 250,
    }),
  },

  methods: {
    validate() {
      return this.taskText.length > 0 && this.taskText.trim() !== "";
    },
    sendTaskInfo() {
      if (this.validate()) {
        let task = {
          text: this.taskText,
          isImportant: this.isImportant,
        };
        this.$emit("addTask", task);
        this.taskText = "";
        this.isImportant = false;
      }
    },
  },
};
</script>
