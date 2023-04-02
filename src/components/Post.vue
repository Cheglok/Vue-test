<template>
  <div class="post">
    <h5 class="post__title">{{ title }}</h5>
    <p class="post__body">{{ body }}</p>
    <button @click="$emit('removePost', id)">Удалить</button>
  </div>
</template>

<script>
export default {
  name: "Post",
  props: {
    postTitle: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
      default: "nobody",
    },
    id: {
      type: Number,
      required: true,
    },
  },
  emits: ["removePost"]
}
</script>

<style scoped>

</style>