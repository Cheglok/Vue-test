import { createApp } from 'vue';
// import Vue from 'vue';
import store from './store';
import App from './App.vue';

import './assets/style.scss';

// const app = createApp(App);
//
// app.use(store);
//
// app.mount('#app');


createApp(App).use(store).mount('#app');

// export const eventBus = new Vue();