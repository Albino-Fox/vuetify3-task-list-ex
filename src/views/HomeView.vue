<template>
  <task-list />
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
