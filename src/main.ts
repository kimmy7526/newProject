import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { createPinia } from 'pinia';
import router from './router';
import ElementPlus from "element-plus";
import 'element-plus/dist/index.css';
// import './assets/tailwind.css'

const app = createApp(App);
// const pinia = createPinia();

// app.use(pinia);
app.use(router);
app.use(ElementPlus);
app.mount('#app'); // 掛載到 index.html 的 <div id="app"></div>
