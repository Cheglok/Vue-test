<script>
export default {
    name: "Content",
    components: {},
    data() {
        return {
            count: 0,
            products: [],
            selectedProducts: [],
            selectedProduct: {},
        }
    },
    methods: {
        async getProducts() {
            try {
                const res = await fetch('https://dev-su.eda1.ru/test_task/products.php')
                this.products = (await res.json()).products;
                console.log(this.products)
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
            this.selectedProduct = {};
            this.count = 0;
            console.log(this.selectedProducts);
        },
        async sendData() {
            console.log(this.prepareData)
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
            <div class="left-column">
                <table>
                    <thead>
                        <tr>
                            <th>Название товара</th>
                            <th>Количество</th>
                            <th>Стоимость</th>
                        </tr>
                    </thead>
                    <tbody v-if="selectedProducts.length">
                        <tr v-for="product in selectedProducts">
                            <td>{{ product.title }}</td>
                            <td>{{ product.count }}</td>
                            <td>{{ product.count * product.price }}</td>
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
    padding: 12px 16px;
    background: #EEF8FF;
    border: none;
    border-bottom: 1px solid #2FA6EA;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin-bottom: 40px;
    color: #0170AE;
}

.add-form__select::after {
    /*    кастомная иконка*/
}

.add-form__submit {
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border: 1px solid #000000;
    border-radius: 5px;
    color: #ffffff;
    text-align: center;
    padding: 12px 16px;
    background-color: #2FA6EA;
}

.left-column {
    width: 918px;
}

table {
    width: 100%;
    min-height: 450px;
}

thead th:nth-child(1) {
    width: 60%;
    text-align: left;
}

tbody td:nth-child(1) {
    width: 60%;
    text-align: left;
}

thead th:nth-child(2) {
    width: 20%;
}

thead th:nth-child(3) {
    width: 20%;
}

th, td {
    padding: 10px;
    text-align: right;
}

.total-price {
    text-align: right;
    border-top: 1px solid #2FA6EA;
}

.save-button {
    display: block;
    margin: 0 auto;
    min-width: 394px;
    padding: 20px;
    background-color: #61A91A;
    color: #ffffff;
    border: none;
    border-radius: 4px;
}

@media (max-width: 500px) {
    .main-content__container {
        flex-direction: column;
    }
}
</style>
