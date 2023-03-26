<template>
  <div class="post" v-for="post in appPosts">
    <h2 class="post__title">{{ post.title }}</h2>
    <p class="post__body">{{ post.body }}</p>
    <span>{{ post.id }}</span>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "Posts",
  data() {
    return {}
  },
  methods: {
    ...mapActions(["fetchPosts"]),
  },
  computed: {
    ...mapGetters(
      {allPosts: "getPost"},
    )
  },
  async mounted() {
    await this.fetchPosts();
  }
}
</script>

<style scoped>

</style>