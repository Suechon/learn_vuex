<template>
  <div id="app">
    <v-col>
      <Counter />
      <DoubleCounter />
      <TotalCounter />
    </v-col>
    <hr />
  </div>
</template>

<script>
import Counter from "./components/Counter.vue";
import DoubleCounter from "./components/DoubleCounter";
import TotalCounter from "./components/TotalCounter";

export default {
  name: "app",
  components: {
    Counter,
    DoubleCounter,
    TotalCounter,
  },
};
</script>
