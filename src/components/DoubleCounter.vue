<template>
  <div>
    <v-col>
      <p>[DoubleCounter.vue]</p>
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
  props: {
    module: {
      type: String,
      required: true,
    },
  },
  computed: {
    step() {
      return this.$store.getters[`${this.module}/step`];
    },
    count() {
      return this.$store.getters[`${this.module}/count`];
    },
  },
  methods: {
    increment() {
      this.$store.dispatch(`${this.module}/increment`);
    },
  },
};
</script>