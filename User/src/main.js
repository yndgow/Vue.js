import { createApp } from 'vue';
import App from './App.vue';
import router from './routers/index.js';
import store from './store/index.js';
import { createPinia } from 'pinia';

const pinia = createPinia();

const app = createApp(App);
app.use(store);
app.use(router);
app.use(pinia);
app.mount('#app');
