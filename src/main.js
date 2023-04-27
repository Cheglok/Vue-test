import {createApp} from 'vue';
import store from './store';
import App from './App.vue';
import {createRouter, createWebHashHistory} from 'vue-router';

import './assets/style.scss';
import Table from "./pages/Table.vue";
import Main from "./pages/Main.vue"

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
    { path: '/', component: Main },
    { path: '/table', component: Table },
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})


createApp(App).use(store).use(router).mount('#app');

// export const eventBus = new Vue();