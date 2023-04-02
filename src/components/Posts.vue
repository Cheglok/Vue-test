<template>
  <div class="posts-container">
    <form action="post" @submit.prevent="createPost">
      <input type="text" placeholder="Input title" v-model="newPostTitle">
      <input type="text" placeholder="Input body" v-model="newPostBody">
      <button type="submit">Опубликовать</button>
    </form>
    Total posts count : {{ postsCount }} <input type="text" v-model="count">
    <Post v-for="post in allPosts"
          :postTitle="post.title"
          :body="post.body"
          :id="post.id"
          @remove-post="removePost"
    />
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import Post from "./Post.vue";

export default {
  name: "Posts",
  components: { Post },
  data() {
    return {
      count: 3,
      newPostTitle: "",
      newPostBody: "",
    }
  },
  methods: {
    ...mapActions(["fetchPosts", "removePost", "addPost"]),
    createPost() {
      let newPost = {
        userId: 1,
        id: Date.now(),
        body: this.newPostBody,
        title: this.newPostTitle,
      };
      this.addPost(newPost);
      this.newPostTitle = '';
      this.newPostBody = '';
    }
  },
  computed: {
    ...mapGetters(
      {allPosts: "getPosts"},
    ),
    postsCount() {
      return this.allPosts.length;
    }
  },
  watch: {
    count(newVal) {
      if(newVal) {
        this.fetchPosts(newVal);
      }
    }
  },
  async mounted() {
    await this.fetchPosts();
  }
}
</script>

<style scoped lang="scss">
  .posts-container {
    width: 50%;
    margin: 0 auto;
  }
  .post__body {
    font-size: 14px;
    @media (max-width: 1000px) {
      font-size: 8px;
    }
  }
</style>