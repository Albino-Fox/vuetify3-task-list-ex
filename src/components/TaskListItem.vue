<template>
  <div
    :class="{
      'pa-4 ma-4': isImportant,
      'text-decoration-line-through': isDone,
    }"
  >
    <p>{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: "TaskListItem",

  props: {
    text: { type: String, default: "" },
    isDone: { type: Boolean, default: false },
    isImportant: { type: Boolean, default: false },
  },

  data: () => ({}),
};
</script>
