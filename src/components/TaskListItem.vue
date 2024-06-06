<template>
  <div
    :class="{
      'text-decoration-line-through text-grey': task.isDone,
    }"
  >
    <p>
      {{ task.text }}
    </p>
  </div>
</template>

<script>
export default {
  name: "TaskListItem",

  props: {
    task: { type: Object, default: () => {}, required: true },
  },
};
</script>
