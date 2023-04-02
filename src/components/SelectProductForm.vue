<template>
  <form class="add-form" @submit.prevent="addProduct">
    <label class="add-form__label" for="select-id">Выберите продукцию</label>
    <select class="add-form__select" name="" id="select-id" v-model="selectedProduct">
      <option v-for="product in products" :value="product" :key="product.id">{{ product.title }}</option>
    </select>
    <label class="add-form__label" for="amount-id">Введите количество</label>
    <input class="add-form__input" type="number" name="" id="amount-id" v-model="selectedCount" min="1" max="100">
    <button class="add-form__submit" type="submit" :disabled="!selectedCount">Добавить</button>
  </form>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "SelectProductForm",
  emits: ["addProduct"],
  data() {
    return {
      selectedCount: '',
      selectedProduct: {},
    };
  },
  computed: {
    ...mapGetters({
      products: "getProducts",
    })
  },
  methods: {
    addProduct() {
      this.$emit("addProduct", {selectedProduct: this.selectedProduct, selectedCount: this.selectedCount});
      this.selectedProduct = this.products[0];
      this.selectedCount = '';
    }
  },
  mounted() {
    this.selectedProduct = this.products[0];
  }
}
</script>

<style scoped>

</style>