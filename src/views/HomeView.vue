<template>
  <div class="d-flex justify-center">
    <v-card
      class="mt-16 minmax"
      elevation="8"
    >
      <task-list />
    </v-card>
  </div>
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
  width: max(50vw, 450px);
}
</style>
