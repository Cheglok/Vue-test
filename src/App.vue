<template>
  <div class="root-container">
    <Alert secondText="This is our success message">
      <b class="red">Here is</b> <i>slot message</i>
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
/*b {*/
/*  color: red;*/
/*}*/
</style>
