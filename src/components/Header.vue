<script>

export default {
    name: "Header",
}

</script>

<template>
    <header class="main-header">
        <div class="container">
            <h1 class="main-header__heading">sf</h1>
        </div>
    </header>
</template>


<style scoped>
.main-header {
    min-height: 60px;
    padding: 17px 0;
    background-color: #755858;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    color: white;
    border: 1px solid #000000;
}

.main-header__heading {
    margin: 0;
    padding: 0;
    font-size: 24px;
    line-height: 24px;
    font-weight: 400;
    text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    -webkit-text-stroke: 1px #000000;
}

@media screen and (max-width: 480px) {
    .main-header {
        border: none;
    }

    .main-header__heading {
        padding-left: 3px;
        -webkit-text-stroke: initial;
    }

}
</style>
