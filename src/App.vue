<script>
import TheContent from "./components/TheContent.vue";
import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue';
export default {
    components: {
        TheContent,
        TheHeader,
        TheFooter
    }
}
</script>

<template>
    <div class="root-container">
        <TheHeader/>
        <TheContent/>
        <TheFooter/>
    </div>
</template>

<style scoped>
.root-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}
</style>
