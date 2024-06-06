<template>
  <div
    :class="{
      'text-decoration-line-through text-grey': isDone,
    }"
  >
    <p>
      {{ text }}
    </p>
  </div>
</template>

<script>
export default {
  name: "TaskListItem",

  props: {
    text: { type: String, default: "" },
    isDone: { type: Boolean, default: false },
  },
};
</script>
