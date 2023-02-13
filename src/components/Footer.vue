<script>
export default {
    name: "Footer"
}
</script>


<template>
    <footer class="main-footer">
        <div class="container">
        <p class="main-footer__text">Very intresting tail</p>
        </div>
    </footer>
</template>


<style scoped>
.main-footer {
    background-color: #222222;
    text-align: right;
    color: #ffffff;
    padding-bottom: 23px;
    padding-top: 146px;

}

.main-footer__text {
    font-weight: 400;
}
@media screen and (max-width: 480px) {
    .main-footer {
        padding-top: 156px;
        padding-bottom: 30px;
    }

    .main-footer__text {
        margin: 0;
        padding-right: 10px;
    }
}
</style>
