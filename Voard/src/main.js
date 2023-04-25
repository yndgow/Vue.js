/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from "./App.vue";

// Composables
import { createApp } from "vue";

// Plugins
import { registerPlugins } from "@/plugins";
// import { useAppStore } from "./store/app";
//import router from './router'

const app = createApp(App);

registerPlugins(app);

//app.use(router);
// app.use(useAppStore);
app.mount("#app");
