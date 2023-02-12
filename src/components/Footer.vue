<script>
export default {
    name: "Footer"
}
</script>


<template>
    <footer class="main-footer">
        <p class="main-footer__text">Very intresting tail</p>
    </footer>
</template>


<style scoped>
.main-footer {
    min-height: 221px;
    background-color: #222222;
    padding: 170px 20px 20px 20px;
    text-align: right;
    color: #ffffff;
}

.main-footer__text {
    font-weight: 400;
    margin: 0;
    padding-right: 45px;
}
@media screen and (max-width: 480px) {
    .main-footer {
        padding-top: 156px;
    }

    .main-footer__text {
        padding-right: 10px;
    }
}
</style>
