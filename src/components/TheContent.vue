<template>
  <main class="main-content">
    <div class="container main-content__container">
      <router-view></router-view>
    </div>
  </main>
  <ModalMessage :message="message" v-show="message" @close-modal="closeModal"/>
</template>

<script>
import ModalMessage from "./ModalMessage.vue";
import {mapActions, mapGetters} from "vuex";

export default {
  name: "TheContent",
  components: {ModalMessage},
  data() {
    return {
      message: '',
      showCount: 0,
    }
  },
  methods: {
    ...mapActions([
      "fetchProducts",
      "addSelectedProducts",
      "sendSelectedProducts",
      "clearSelectedProducts"
    ]),
    addProduct(payload) {
      this.$store.dispatch("addSelectedProducts", {
        selectedProduct: payload.selectedProduct,
        count: payload.selectedCount,
      })
      this.showCount += payload.selectedCount;
    },
    async sendSelectedProducts() {
      const result = await this.$store.dispatch("sendSelectedProducts");
      if (result.success) {
        this.message = 'Заказ принят, код ' + result.code;
        await this.$store.dispatch("clearSelectedProducts");
      } else {
        alert('Что-то не так, обратитесь в поддержку');
      }
    },
    closeModal() {
      this.message = '';
    }
  },
  computed: {
    ...mapGetters({
      products: "getProducts",
      selectedProducts: "getSelectedProducts",
      selectedProductsPreparedData: "getSelectedProductsPreparedData",
      totalPrice: "getTotalSelectedPrice",
    }),
  },
  async mounted() {
    await this.$store.dispatch("fetchProducts");
  }
}
</script>

<style lang="scss">
$main-background-color: #e5e5e5;
$title-text-color: #0170ae;
$decorative-color: #2fa6ea;
$input-background-color: #eef8ff;
$submit-button-color: #61a91a;

.main-content {
  position: relative;
  flex-grow: 1;

  padding-top: 45px;

  background: $main-background-color;
}

.main-content__container {
  display: flex;
}

@media (max-width: 900px) {
  .main-content {
    padding-top: 24px;
    padding-bottom: 46px;
  }

  .main-content__container {
    flex-direction: column;

    padding-right: 26px;
    max-width: 500px;
  }
}
</style>
