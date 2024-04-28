<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    // todos:
    // [ { taskText: "",
    // isImportant: false,
    // isCompleted: false, } ]
    // [],
  }),
};
</script>
