<template>
  <div>
    <task-list-input @add-task="addTask" />
    <div>
      <task-list-item
        v-for="task in tasks"
        :key="task.id"
        :text="task.text"
      />
    </div>
  </div>
</template>

<script>
import TaskListItem from "../components/TaskListItem.vue";
import TaskListInput from "../components/TaskListInput.vue";

export default {
  name: "TaskList",

  components: {
    TaskListItem,
    TaskListInput,
  },

  data: () => ({
    nextId: 0,
    tasks: [
      {
        id: 0,
        text: "holy moly",
      },
    ],
  }),

  methods: {
    addTask(info) {
      info.id = this.nextId;
      this.nextId++;
      this.tasks.push(info);
    },
  },
};
</script>
