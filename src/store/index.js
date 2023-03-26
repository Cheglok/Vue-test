import {createStore} from "vuex";
import products from "./modules/products";
import posts from "./modules/posts";

const store = createStore({
    modules: {
        products: products,
        posts: posts
    }
});

export default store;