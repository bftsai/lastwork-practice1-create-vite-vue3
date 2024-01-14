
import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import axios from 'axios'
import VueAxios from 'vue-axios';
import Loading from 'vue3-loading-overlay';
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';

import { thousands, data } from './methods/filters.js';
import pushMessageState from './methods/pushMessageState.js';

import App from './App.vue'
import router from './router'


const app = createApp(App)

app.use(VueAxios, axios)
app.use(createPinia())
app.use(router)

app.config.globalProperties.$filters = {
    thousands,
    data,
};
app.config.globalProperties.$pushMessageState = pushMessageState;

app.component('Loading',Loading);

app.mount('#app')
