<script>
export default {
    name: "TheFooter"
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
    padding-top: 146px;
    padding-bottom: 23px;

    text-align: right;
    color: #ffffff;

    background-color: #222222;
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
