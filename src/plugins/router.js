import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Cart from '@/components/Cart.vue';
import AddToCart from '@/components/AddToCart.vue'

const routes = [
	{
		path: '',
		name: 'Home',
		component: Home,
	},
	{
		path: '/cart',
		name: 'Cart',
		component: Cart,
	},
	{
		path: '/addtocart/:id',
		name: 'AddToCart',
		component: AddToCart,
		props: true,
	},
	{
		path: '/about',
		name: 'about',
		component: () => import('@/views/About.vue'),
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
