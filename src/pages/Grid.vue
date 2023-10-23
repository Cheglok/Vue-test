<template>
  <div class="container">
    <ul class="orders-in-progress">
      <li v-for="(order, index) in test" class="order-in-progress__item order-card"
      :class="{'order-card_big': isBigCard(index, true)}"
      >Заказ c ,jkmibv ntrcnjv rjnjhsq {{}}</li>
    </ul>
    <ul class="orders-ready">
      <li v-for="(order, index) in test" class="order-ready__item order-card"
          :class="{'order-card_big': isBigCard(index, false)}"
      >Заказ {{}}</li>
    </ul>
  </div>
</template>

<script>
import {defineComponent} from 'vue'
import {mocksOrders} from "@/mock/testOrders";

export default defineComponent({
  name: "Grid",
  data() {
    return {
      test: 5,
    }
  },
  computed: {
    ordersReady() {
      return mocksOrders.filter(order => {
        return order.done;
      });
    },
    ordersInProgress() {
      return mocksOrders.filter(order => {
        return !order.done;
      });
    },
    ordersReadyCount() {
      return this.ordersReady.length - 1;
    },
    ordersInProgressCount() {
      return this.ordersInProgress.length - 1;
    },
  },
  methods: {
    isBigCard(index, inProgress) {
      // const ordersCount = inProgress ? this.ordersInProgressCount : this.ordersReadyCount;
      const ordersCount = inProgress ? this.test : this.test;
      const maxBigCardsAmount = inProgress ? 12 : 8;
      let extraOrders = ordersCount - maxBigCardsAmount;
      let bigCardsCount = maxBigCardsAmount - extraOrders - 1;
      return index <= bigCardsCount;
    },
    increment() {
      this.test++;
    }
  },
  mounted() {
    setInterval(this.increment, 500)
  }

})
</script>

<style scoped>
* {
  border: 1px dotted black;
  box-sizing: border-box;
}
.container {
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-gap: 2%;
  padding: 2%;
  background-color: darkseagreen;
}
.orders-in-progress,
.orders-ready {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  grid-template-rows: repeat(8, 40px);
  padding: 0;
  margin: 0;
  list-style: none;
  height: 393px;
  overflow: hidden;
}

.orders-ready {
  grid-template-columns: repeat(2, 1fr);
}

.order-in-progress__item,
.order-ready__item {
  overflow: hidden;
}

.order-card_big {
  grid-row: span 2;
}

</style>