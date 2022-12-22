import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/plugins/router'
import Vuex from 'vuex'
import store from './store/store.js'
import 'es6-promise/auto'
import '@/style.css'

createApp(App).use(router).use(Vuex).use(store).mount('#app')