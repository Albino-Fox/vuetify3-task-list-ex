<template>
  <div>
    <input
      v-model="taskText"
      type="text"
    >
    <!-- <p>{{ taskText }}</p> -->
    <button
      type="button"
      @click="sendTaskInfo"
    >
      Add
    </button>
  </div>
</template>

<script>
export default {
  name: "TaskListInput",

  data: () => ({
    taskText: "",
  }),

  methods: {
    sendTaskInfo() {
      let task = {
        text: this.taskText,
      };
      this.$emit("addTask", task);
    },
  },
};
</script>
