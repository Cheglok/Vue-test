<template>
  <p>Выбрано: {{ showCount }}</p>
  <input type="text" ref="name">
  <button @click='focus'>Focus input</button>
</template>

<script>
// import {eventBus} from "../main";

export default {
  name: "Counter",
  props: {
    showCount: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      selectedCount: 0,
      selectedProduct: 'не выбран'
    }
  },
  methods: {
    focus() {
      this.$refs.name.focus();
    },
  },
}
</script>

<style scoped>

</style>