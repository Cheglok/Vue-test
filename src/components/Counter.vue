<template>
  <p>Выбрано: {{ showCount }}</p>
<!--  <p>{{ selectedCount }}</p>-->
<!--  <p>{{ selectedProduct }}</p>-->
</template>

<script>
// import {eventBus} from "../main";

export default {
  name: "Counter",
  props: {
    showCount: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      selectedCount: 0,
      selectedProduct: 'не выбран'
    }
  },
  // created() {
  //   eventBus.$on("showInCounter", payload => {
  //     console.log(payload.selectedCount, payload.selectedProduct);
  //   })
  // },
  // beforeUnmount() {
  //   eventBus.$off("showInCounter");
  // }
}
</script>

<style scoped>

</style>