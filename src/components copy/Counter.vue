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
  name: "Counter",
  watch: {},
  computed: {
    //-----単一カウントのとき----
    // step() {
    //   return this.$store.getters.step;
    // },

    // count() {
    //   return this.$store.getters.count;
    // },
    //---------
    step() {
      return this.$store.getters["counter/step"];
    },
    count() {
      return this.$store.getters["counter/count"];
    },
  },
  methods: {
    increment() {
      //----単一カウントのとき
      //   this.$store.dispatch("increment");
      //   this.$store.commit("increment");
      this.$store.dispatch("counter/increment");
    },
  },
};
</script>