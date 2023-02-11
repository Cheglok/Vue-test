<script>
export default {
    name: "Content",
    components: {},
    data() {
        return {
            count: '',
            products: [],
            selectedProducts: [{title: 'Борщевой набор', price: '34', count: '11', id: 1},{title: 'Кости для ухи', price: '34', count: '20', id: 1},{title: 'Вода для щщей', price: '34', count: '1', id: 1}],
            selectedProduct: {},
        }
    },
    methods: {
        async getProducts() {
            try {
                const res = await fetch('https://dev-su.eda1.ru/test_task/products.php')
                this.products = (await res.json()).products;
                this.selectedProduct = this.products[0];
            } catch (error) {
                console.log('Error! Could not reach the API. ' + error);
            }
        },
        addProduct() {
            let selectedProduct = this.selectedProduct;
            let count = this.count;
            this.selectedProducts.push({
                id: selectedProduct.id,
                title: selectedProduct.title,
                price: selectedProduct.price,
                count: count,
            });
            this.selectedProduct = this.products[0];
            this.count = '';
        },
        async sendData() {
            try {
                const response = await fetch('https://dev-su.eda1.ru/test_task/save.php', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(this.prepareData)
                });
                let result = (await response.json());
                if (result.success) {
                    alert('Заказ принят, код' + result.code);
                    this.selectedProducts = [];
                } else {
                    alert('Что-то не так, обратитесь в поддержку');
                }
            } catch (error) {
                console.log('Error! Could not reach the API. ' + error);
            }
        },
    },
    computed: {
        totalPrice() {
            return this.selectedProducts.reduce(
                (accumulator, item) => accumulator + item.price * item.count, 0
            )
        },
        prepareData() {
            return this.selectedProducts.map(item => {
                return {
                    product_id: item.id,
                    quantity: item.count
                }
            })
        }
    },
    mounted() {
        this.getProducts();
    }
}
</script>

<template>
    <main class="main-content">
        <div class="container main-content__container">
            <form class="add-form" @submit.prevent="addProduct">
                <label class="add-form__label" for="select-id">Выберите продукцию</label>
                <select class="add-form__select" name="" id="select-id" v-model="selectedProduct">
                    <option v-for="product in products" :value="product">{{ product.title }}</option>
                </select>
                <label class="add-form__label" for="amount-id">Введите количество</label>
                <input class="add-form__input" type="number" name="" id="amount-id" v-model="count">
                <button class="add-form__submit" type="submit">Добавить</button>
            </form>
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
                <button class="save-button" @click="sendData">Сохранить</button>
            </div>
        </div>
    </main>
</template>

<style scoped>
.main-content {
    flex-grow: 1;
    background: #E5E5E5;
    padding-top: 45px;
}

.main-content__container {
    display: flex;
    justify-content: space-between;
}

.add-form {
    width: 394px;
    margin-right: 40px;
    display: flex;
    flex-direction: column;
}

.add-form__label {
    display: block;
    margin-bottom: 21px;
    width: 100%;
}

.add-form__select,
.add-form__input {
    display: block;
    font-size: 24px;
    line-height: 28px;
    padding: 11px 16px;
    background-color: #EEF8FF;
    color: #0170AE;
    border: none;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25), 0 1px 0 0 #e5e5e5, 0 2px 0 0 #2fa6ea;
}

.add-form__select {
    appearance: none;
    background-image: url('../assets/arrow-down.svg');
    background-repeat: no-repeat;
    background-position: top 20px right 18px;
    border: 1px solid #000000;
    margin-bottom: 40px;
}

.add-form__input {
    padding-bottom: 13px;
    margin-bottom: 48px;
}

.add-form__submit {
    font-size: 24px;
    line-height: 28px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border: 1px solid #000000;
    border-radius: 3px;
    color: #ffffff;
    text-align: center;
    padding: 11px 16px;
    background-color: #2FA6EA;
    -webkit-text-stroke: 1px #000000;
}

.right-column {
    flex-grow: 2;
    display: flex;
    min-height: 698px;
    flex-direction: column;
    padding-bottom: 68px;
    padding-top: 43px;
    padding-right: 12px;
}

.order-table {
    width: 100%;
    margin-bottom: auto;
}

thead th:nth-child(1) {
    width: 60%;
    text-align: left;
}

tbody td:nth-child(1) {
    width: 61%;
    text-align: left;
}

thead th:nth-child(2) {
    width: 21%;
}

thead th:nth-child(3) {
    width: 18%;
}

th{
    padding: 16px 10px;
    text-align: right;
}

td {
    padding: 10px;
    text-align: right;
}

th {
    color: #0170AE;
    font-weight: 300;
}

.total-price {
    padding-top: 18px;
    text-align: right;
    border-top: 1px solid #2FA6EA;
    font-weight: 400;
}

.save-button {
    display: block;
    margin: 0 auto;
    min-width: 394px;
    padding: 13px;
    background-color: #61A91A;
    color: #ffffff;
    border: none;
    border-radius: 4px;
}

/*@media (max-width: 900px) {*/
/*    .main-content__container {*/
/*        flex-direction: column;*/
/*    }*/
/*    .add-form {*/
/*        margin: 0 auto 50px auto;*/
/*    }*/
/*}*/
</style>
