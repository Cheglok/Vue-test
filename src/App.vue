<template>
  <div class="root-container">
    <Alert secondText="This is our success message">
      <template v-slot:title>
        <b class="red">Here is</b> <i>title message</i>
        <p class="text-p">whatewer</p>
      </template>
      <template v-slot:description>
        <b class="red">Here is</b> <i>description message</i>
        <p class="text-p">whatewer</p>
      </template>
      <h2>whatewer else</h2>
    </Alert>
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
import Alert from "./components/Alert.vue";


export default {
  components: {
    Posts,
    TheContent,
    TheHeader,
    TheFooter,
    Alert,
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
