<template>
  <div>
    {{ text }}
    <button>x</button>
  </div>
</template>

<script>
export default {
  name: "TaskListItem",

  props: {
    text: { type: String, default: "" },
  },

  data: () => ({}),
};
</script>
