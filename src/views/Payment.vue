<template>
	<div class="flex grow">
		<div class="w-full md:col-7 p-6 md:p-12">
			<RouterLink to="/" class="font-bold text-xl "><font-awesome-icon icon="fa-arrow-left" class=" fa-lg"/> Voltar</RouterLink>
			<Order/>
		</div>
		<Cart v-if="isDesktop()" />
	</div>
</template>

<script>
import Mixin from '@/mixins/mixins.js'
import { RouterLink } from 'vue-router';

import Order from '../components/Order.vue';
import Cart from '@/components/Cart.vue';

export default {
	mixins: [Mixin],
	components: {
		Cart,
		RouterLink,
		Order
	}
}
</script>

<style>

</style>