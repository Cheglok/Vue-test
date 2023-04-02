<template>
  <p>Выбрано: {{ showCount }}</p>
</template>

<script>
export default {
  name: "Counter",
  props: {
    showCount: {
      type: Number,
      default: 0,
    },
  }
}
</script>

<style scoped>

</style>