<template>
    <div class="bg-gray-50 h-screen w-full p-6 md:p-16 gap-3 overflow-y-hidden">
        <RouterLink to="/" class="font-bold text-xl md:hidden">← Voltar</RouterLink>
        <h2 class="font-bold text-2xl my-8">Seu Pedido</h2>
        <p v-if="hasNoItem">Seu Carrinho ainda está vazio</p>

        <div class="overflow-y-auto h-3/4 mb-9">
            <CartItem  v-for="item in cartList" :key="item.id" :item="item" />
        </div>
        <div class="text-right" v-if="!cartList.lenght">
            <span class="text-lg font-semibold mr-2">Total:</span>
            <span class="text-lg font-semibold text-secondary-200">R$ {{ formatPrice(getCartTotal) }}</span>
        </div>
    </div>
</template>

<script>
import { RouterLink } from 'vue-router';
import CartItem from './CartItem.vue';
import { mapGetters } from 'vuex'

export default {
    name: 'Cart',
    components: {
        CartItem,
        RouterLink
    },
    methods: {
        formatPrice(value) {
            let val = (value / 1).toFixed(2).replace('.', ',')
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        },
    },
    computed: {
        ...mapGetters([
            'getCartTotal'
        ]),
        cartList() {
            return this.$store.state.cartList;
        },
        hasNoItem() {
            return this.cartList.lenght
        }
    }
}
</script>
