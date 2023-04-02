<template>
  <div class="root-container">
    <TheHeader/>
    <TheContent/>
    <TheFooter/>
  </div>
</template>

<script>
import TheContent from "./components/TheContent.vue";
import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue';
import Posts from "./components/Posts.vue";

export default {
  components: {
    Posts,
    TheContent,
    TheHeader,
    TheFooter
  }
}
</script>

<style scoped>
.root-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
