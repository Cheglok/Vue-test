const products = {
    state() {
        return {
            products: [],
            selectedProducts: [],
        }
    },
    mutations: {
        setProducts(state, products) {
            state.products = products;
        },
        addSelectedProducts(state, payload) {
            state.selectedProducts.push({
                id: payload.selectedProduct.id,
                title: payload.selectedProduct.title,
                price: payload.selectedProduct.price,
                count: payload.count,
            })
        },
        clearSelectedProducts(state) {
            state.selectedProducts = [];
        }
    },
    actions: {
        async fetchProducts(store) {
            try {
                const res = await fetch('https://dev-su.eda1.ru/test_task/products.php')
                const products = (await res.json()).products;
                console.log(products)
                store.commit("setProducts", products);
            } catch (error) {
                console.log('Error! Could not reach the API. ' + error);
            }
        },
        addSelectedProducts(store, payload) {
            store.commit("addSelectedProducts", payload);
        },
        async sendSelectedProducts(store) {
            const selectedProductsPreparedData = store.state.selectedProducts.map(item => {
                return {
                    product_id: item.id,
                    quantity: item.count
                }
            })
            try {
                const response = await fetch('https://dev-su.eda1.ru/test_task/save.php', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(selectedProductsPreparedData)
                });
                return await response.json();
            } catch (error) {
                console.log('Error! Could not reach the API. ' + error);
            }
        },
        clearSelectedProducts(store) {
            store.commit("clearSelectedProducts");
        },
    },
    getters: {
        getProducts(state) {
            return state.products;
        },
        getSelectedProducts(state) {
            return state.selectedProducts;
        },
        getTotalSelectedPrice(state) {
            return state.selectedProducts.reduce(
                (price, product) => price + product.price * product.count, 0
            );
        },
    }
};

export default products;