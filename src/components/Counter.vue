<template>
  <div>
    <v-col>
      <p>[Counter.vue]</p>
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
  props: {
    module: {
      type: String,
      required: true,
    },
  },
  computed: {
    step() {
      return this.$store.getters.step;
    },
    count() {
      return this.$store.getters.count;
    },
  },
  methods: {
    increment() {
      this.$store.dispatch("increment");
    },
  },
};
</script>