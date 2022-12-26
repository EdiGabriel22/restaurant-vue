<template>
    <div class="md:flex md:overflow-y-hidden">
        <RouterLink to="/cart" class="bg-gray-50 p-3 justify-end flex" v-if="isSmallScreens()">
            <font-awesome-icon class="text-white bg-primary-500 p-3 rounded-full" icon="fa-cart-shopping" />
        </RouterLink>
        <CategoryMenu />
        <ItemList />
        <Cart v-if="isDesktop()" />
    </div>
</template>

<script>
import CategoryMenu from '@/components/CategoryMenu.vue'
import ItemList from '@/components/ItemList.vue'
import Cart from '@/components/Cart.vue';
import Mixin from '@/mixins/mixins.js'
import { RouterLink } from 'vue-router';

export default {
    name: 'Home',
    components: {
        CategoryMenu,
        ItemList,
        Cart,
        RouterLink
    },
    mixins: [Mixin]
}
</script>
