<template>
  <v-card
    class="ma-16"
    elevation="8"
  >
    <task-list />
  </v-card>
</template>

<script>
import { defineComponent } from "vue";

// Components
import TaskList from "../components/TaskList.vue";

export default defineComponent({
  name: "TaskListView",

  components: {
    TaskList,
  },
});
</script>

<style>
.minmax {
  width: minmax(25%, 90%);
}
</style>
