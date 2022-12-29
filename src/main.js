import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/plugins/router';
import Vuex from 'vuex';
import store from './store/store.js';
import 'es6-promise/auto';
import '@/style.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
	faHatWizard,
	faPizzaSlice,
	faBurger,
	faIceCream,
	faWineBottle,
	faChampagneGlasses,
	faPlus,
	faMinus,
	faCartShopping,
	faX,
	faArrowLeft
} from '@fortawesome/free-solid-svg-icons';

library.add(
	faHatWizard,
	faPizzaSlice,
	faBurger,
	faIceCream,
	faWineBottle,
	faChampagneGlasses,
	faPlus,
	faMinus,
	faCartShopping,
	faX,
	faArrowLeft

);

createApp(App)
	.component('font-awesome-icon', FontAwesomeIcon)
	.use(router)
	.use(Vuex)
	.use(store)
	.mount('#app');
