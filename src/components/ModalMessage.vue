<script>
export default {
    name: "ModalMessage",
    props: {'message': String}
}
</script>

<template>
    <section class="modal-message">
    <p class="modal-message__text">{{message}}</p>
    <button class="modal-message__button-close">Спасибо</button>
    </section>
</template>

<style scoped>
.modal-message {
    position: absolute;
    top: 50px;
    left: 50%;

    width: 300px;
    margin-left: -150px;
    padding: 20px;

    text-align: center;

    background-color: #ffffff;
    border: 1px solid #000000;
}

</style>
