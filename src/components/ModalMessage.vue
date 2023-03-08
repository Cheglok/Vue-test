<template>
  <section class="modal-message" @click="$emit('closeModal')">
    <div class="modal-message__body" @click.stop.prevent="">
      <p class="modal-message__text">{{ message }}</p>
      <button class="modal-message__button-close" @click="$emit('closeModal')">Спасибо</button>
    </div>
  </section>
</template>

<script>
export default {
name: "ModalMessage",
props: {'message': String}
}
</script>

<style scoped>

.modal-message {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.25);
}

.modal-message__body {
    position: absolute;
    top: 50px;
    left: 50%;

    width: 300px;
    margin-left: -150px;
    padding: 20px;

    text-align: center;
    color: #0170ae;

    background-color: #eef8ff;
    border: 1px solid #000000;
    border-radius: 5px;
    box-shadow: 0 0 30px 5px #000000;
}

.modal-message__button-close {
    padding: 10px;

    color: #ffffff;

    background-color: #61a91a;
    border: none;
    border-radius: 4px;
}

.modal-message__button-close:hover,
.modal-message__button-close:focus {
    outline: 1px solid #000000;
}

.modal-message__button-close:active {
    background-color: #ffffff;
    color: #61a91a;
}
</style>
