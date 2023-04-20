import { createApp } from 'vue';
import App from './App.vue';
import router from './routers/index.js';
import store from './store/index.js';
import { createPinia } from 'pinia';
import piniaPluginPersistedState from 'pinia-plugin-persistedstate';

const pinia = createPinia();
pinia.use(piniaPluginPersistedState);

const app = createApp(App);
app.use(store);
app.use(router);
app.use(pinia);
app.mount('#app');
