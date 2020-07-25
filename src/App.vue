<template>
  <div id="app">
    <v-col>
      <Counter />
      <DoubleCounter />
    </v-col>
    <hr />
  </div>
</template>

<script>
import Counter from "./components/Counter.vue";
import DoubleCounter from "./components/DoubleCounter";
export default {
  name: "app",
  components: {
    Counter,
    DoubleCounter,
  },
};
</script>
