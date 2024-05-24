<template>
  <div class="d-flex flex-column ma-3 pa-3">
    <task-list-form @add-task="addTask" />
    <div>
      <v-card
        v-for="task in tasks"
        :key="task.id"
        :class="{
          'border-s-xl': task.isImportant,
        }"
        class="d-flex flex-row justify-space-between ma-3 pa-3 ga-2"
      >
        <task-list-item
          :text="task.text"
          :is-done="task.isDone"
          :is-important="task.isImportant"
          class="pa-1 flex-grow-1"
          @click="task.isDone = !task.isDone"
        />
        <v-btn
          :icon="task.isImportant ? 'mdi-star' : 'mdi-star-outline'"
          variant="tonal"
          rounded="lg"
          size="x-small"
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
  data: () => ({
    nextId: 0,
    tasks: [],
  }),

  // INFO: for testing:
  // created() {
  //   this.addTask({
  //     text: "holy moly",
  //     isImportant: false,
  //     isDone: false,
  //   });
  // },

  methods: {
    addTask(info) {
      info.id = this.nextId;
      this.nextId++;
      this.tasks.push(info);
    },
    toggleImportant(info) {
      info.isImportant = !info.isImportant;
    },
    removeTask(id) {
      this.tasks.splice(this.tasks.findIndex((cur) => cur.id === id));
    },
  },
};
</script>
