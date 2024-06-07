import "./assets/satoshi.css";
import "./assets/modern-normalize.css";
import "./assets/main.css";

import "./assets/style.css";
import "./assets/utils.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueSmoothScroll from "vue3-smooth-scroll";

const app = createApp(App);

app.use(router);
app.use(VueSmoothScroll);

app.config.globalProperties.window = window;

app.mount("#app");
