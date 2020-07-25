<template>
  <div>
    <v-col>
      <v-btn @click="increment">increment {{ step }}</v-btn>
    </v-col>
    <v-col>
      <span>total {{ count }}</span>
    </v-col>
  </div>
</template>

<script>
export default {
  name: "DoubleCounter",
  watch: {},
  computed: {
    // step() {
    //   return this.$store.getters["counter/step"];
    // },
    // count() {
    //   return this.$store.getters["counter/count"];
    // },
    step() {
      return this.$store.getters["doubleCounter/step"];
    },
    count() {
      return this.$store.getters["doubleCounter/count"];
    },
  },
  methods: {
    increment() {
      // this.$store.dispatch("counter/increment");
      this.$store.dispatch("doubleCounter/increment");
    },
  },
};
</script>