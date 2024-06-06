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

import taskList from "../api/index.js";
import store from "../store/index.js";

export default {
  name: "TaskList",

  components: {
    TaskListItem,
    TaskListForm,
  },
  computed: {
    tasks() {
      return store.state.tasks;
    },
    nextId() {
      return store.state.nextId;
    },
  },
  created() {
    taskList.getTasks((tasks) => {
      store.commit("setTasks", tasks);
    });
  },

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
      this.tasks.splice(
        this.tasks.findIndex((cur) => cur.id === id),
        1
      );
    },
  },
};
</script>
