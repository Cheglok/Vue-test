import {createApp} from 'vue';
import store from './store';
import App from './App.vue';
import {createRouter, createWebHashHistory} from 'vue-router';

import './assets/style.scss';
import Table from "./pages/Table.vue";
import Main from "./pages/Main.vue"
import Grid from "./pages/Grid.vue"

// 2. Define some routes
// Each route should map to a component.
const routes = [
    { path: '/', component: Main },
    { path: '/table', component: Table },
    { path: '/grid', component: Grid },
]

// 3. Create the router instance and pass the `routes` option
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes,
})


createApp(App).use(store).use(router).mount('#app');