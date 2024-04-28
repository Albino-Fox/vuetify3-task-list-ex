<template>
  <p>{{ testText }}</p>
  <task-list-item text="ultrality" />
</template>

<script>
import TaskListItem from "../components/TaskListItem.vue";

export default {
  name: "TaskList",

  components: {
    TaskListItem,
  },

  data: () => ({
    testText: "sample text",
  }),
};
</script>
