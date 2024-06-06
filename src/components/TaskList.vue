<template>
  <div class="d-flex flex-column ma-3 pa-3">
    <task-list-form @add-task="addTask" />
    <div style="max-height: 72vh; overflow-y: auto">
      <v-card
        v-for="task in tasks"
        :key="task.id"
        :class="{
          'border-s-xl': task.isImportant,
        }"
        class="d-flex flex-row justify-space-between ma-3 pa-3 ga-2"
      >
        <task-list-item
          class="pa-1 flex-grow-1"
          style="overflow-x: auto"
          :text="task.text"
          :is-done="task.isDone"
          :is-important="task.isImportant"
          @click="task.isDone = !task.isDone"
        />
        <v-btn
          variant="tonal"
          rounded="lg"
          size="x-small"
          :icon="task.isImportant ? 'mdi-star' : 'mdi-star-outline'"
          @click="toggleImportant(task)"
        />
        <v-btn
          icon="mdi-close"
          variant="tonal"
          rounded="lg"
          size="x-small"
          @click="removeTask(task.id)"
        />
      </v-card>
    </div>
  </div>
</template>

<script>
import TaskListItem from "../components/TaskListItem.vue";
import TaskListForm from "../components/TaskListForm.vue";

export default {
  name: "TaskList",

  components: {
    TaskListItem,
    TaskListForm,
  },
  computed: {
    tasks() {
      return this.$store.getters.tasks;
    },
  },
  created() {
    this.$store.dispatch("fetchTasks", this.tasks);
  },

  methods: {
    addTask(info) {
      this.$store.dispatch("addTask", info);
    },
    toggleImportant(info) {
      info.isImportant = !info.isImportant;
    },
    removeTask(id) {
      this.$store.dispatch("removeTask", id);
    },
  },
};
</script>
