import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Cart from '@/components/Cart.vue';
import AddToCart from '@/components/AddToCart.vue'
import Payment from '@/views/Payment.vue'

const routes = [
	{
		path: '/',
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
		path: '/payment',
		name: 'Payment',
		component: Payment,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
