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
import axios from "axios";

const app = createApp(App);

registerPlugins(app);

app.mount("#app");

// axios 전역 설정
//axios.defaults.baseURL = "http://localhost:8184"; // 개발용
//axios.defaults.baseURL = "http://13.125.215.198:8184"; // 배포용
