<template>
  <main class="main-content">
    <div class="container main-content__container">
      <SelectProductForm
          @addProduct="addProduct"
      />
      <Counter
        :showCount="showCount"
      />
      <div class="right-column">
        <table class="order-table">
          <thead>
          <tr>
            <th class="order-table__th">Название товара</th>
            <th class="order-table__th">Количество</th>
            <th class="order-table__th">Стоимость</th>
          </tr>
          </thead>
          <tbody v-if="selectedProducts.length">
          <tr v-for="product in selectedProducts">
            <td class="order-table__td">{{ product.title }}</td>
            <td class="order-table__td">{{ product.count }} шт.</td>
            <td class="order-table__td">{{ (product.count * product.price).toFixed(2) }}</td>
          </tr>
          </tbody>
        </table>
        <p class="total-price">Итого: {{ totalPrice }}</p>
        <button class="save-button" @click="sendSelectedProducts" :disabled="!selectedProducts.length">Сохранить</button>
      </div>
    </div>
    <Posts/>
  </main>
  <ModalMessage :message="message" v-show="message" @close-modal="closeModal"/>
</template>

<script>
import ModalMessage from "./ModalMessage.vue";
import Posts from "./Posts.vue";
import SelectProductForm from "./SelectProductForm.vue";
import {mapActions, mapGetters} from "vuex";
import Counter from "./Counter.vue";

export default {
  name: "TheContent",
  components: {Counter, SelectProductForm, ModalMessage, Posts},
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

.add-form {
  display: flex;
  flex-direction: column;

  width: 394px;
  margin-right: 39px;
}

.add-form__label {
  display: block;
  margin-bottom: 21px;
}

.add-form__select,
.add-form__input {
  display: block;

  padding: 11px 16px;

  font-size: 24px;
  line-height: 28px;
  color: $title-text-color;

  background-color: $input-background-color;
  border: none;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25), 0 1px 0 0 $main-background-color, 0 2px 0 0 $decorative-color;
  cursor: pointer;

  &:hover,
  &:focus {
    outline: 1px solid #000000;
  }
}

.add-form__select {
  margin-bottom: 40px;

  appearance: none;
  background-image: url('../assets/arrow-down.svg');
  background-repeat: no-repeat;
  background-position: top 20px right 18px;
  border: 1px solid #000000;
}

.add-form__input {
  margin-bottom: 48px;
  padding-bottom: 13px;
}

.add-form__submit {
  padding: 11px 16px;

  font-size: 24px;
  line-height: 28px;
  font-weight: 400;
  color: #ffffff;
  text-align: center;

  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border: 1px solid #000000;
  border-radius: 3px;
  background-color: $decorative-color;
  -webkit-text-stroke: 1px #000000;

  &:disabled {
    opacity: 0.5;
  }

  &:hover,
  &:focus {
    outline: 1px solid #000000;
  }

  &:active {
    background-color: #ffffff;
    color: $decorative-color;
  }
}

.right-column {
  display: flex;
  flex-direction: column;
  flex-grow: 2;

  min-height: 409px;
  padding: 43px 12px 68px 0;
}

.order-table {
  width: 100%;
  margin-bottom: auto;

  & th:nth-child(1) {
    width: 64%;

    text-align: left;
  }

  & td:nth-child(1) {
    text-align: left;
  }

  & th:nth-child(2) {
    width: 18%;
  }

  & th:nth-child(3) {
    width: 18%;
  }
}

.order-table__th {
  padding: 16px 10px;
  text-align: right;
  color: $title-text-color;
  font-weight: 300;
}

.order-table__td {
  padding: 10px;
  text-align: right;
}

.total-price {
  margin: 0 13px 20px;
  padding-top: 19px;

  font-weight: 400;
  text-align: right;

  border-top: 1px solid $decorative-color;
}

.save-button {
  display: block;

  width: 394px;
  margin: 0 auto;
  padding: 11px 13px 13px 25px;

  line-height: 28px;
  color: #ffffff;

  background-color: $submit-button-color;
  border: none;
  border-radius: 4px;

  &:disabled {
    opacity: 0.5;
  }

  &:hover,
  &:focus {
    outline: 1px solid #000000;
  }

  &:active {
    background-color: #ffffff;
    color: $submit-button-color;
  }
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

  .add-form {
    width: auto;
    margin: 0 0 29px 0;
  }

  .add-form__select {
    padding-top: 12px;
    padding-bottom: 12px;

    box-shadow: 0 1px 0 0 $main-background-color, 0 2px 0 0 $decorative-color;
    border: none;
  }

  .add-form__submit {
    -webkit-text-stroke: initial;
  }

  .right-column {
    min-height: 0;
    padding: 0;

    line-height: 35px;
  }

  .order-table {
    margin-bottom: 12px;

    & thead {
      display: none;
    }

    & tr {
      display: flex;
      flex-wrap: wrap;

      margin-bottom: 17px;
    }
  }

  .order-table__td {
    padding: 5px 0;

    &:nth-child(1) {
      width: 100%;
    }

    &:nth-child(2) {
      width: 50%;

      font-weight: 400;
      text-align: left;
    }

    &:nth-child(3) {
      width: 50%;

      font-weight: 400;
    }
  }

  .total-price {
    margin: 0 0 38px;
  }

  .save-button {
    width: auto;
    margin: 0;
  }
}
</style>
