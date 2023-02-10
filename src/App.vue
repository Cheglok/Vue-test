<script>
import MainContent from "./components/Content.vue";
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
export default {
    components: {
        MainContent,
        Header,
        Footer
    }
}
</script>

<template>
    <div class="root-container">
        <Header/>
        <MainContent/>
        <Footer/>
    </div>
</template>

<style scoped>
.root-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}
</style>
