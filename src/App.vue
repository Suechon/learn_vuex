<template>
  <div id="app">
    <v-col>
      <Counter />
    </v-col>
    <hr />
  </div>
</template>

<script>
import Counter from "./components/Counter.vue";
export default {
  name: "app",
  components: {
    Counter,
  },
};
</script>
