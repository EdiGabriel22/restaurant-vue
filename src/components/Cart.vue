<template>
    <div class="bg-gray-50 h-screen  w-full p-6 md:p-16 gap-3  ">
        <div class="h-full">
            <RouterLink to="/" class="font-bold text-xl md:hidden"><font-awesome-icon icon="fa-arrow-left" class=" fa-lg"/> Voltar</RouterLink>
            <h2 class="font-bold text-2xl my-8">Seu Pedido</h2>
            <p v-if="hasNoItem">Seu Carrinho ainda está vazio</p>
            <transition-group name="list" tag="div" class="overflow-y-auto h-3/5 mb-9">
                <CartItem  v-for="item in cartList" :key="item.id" :item="item" />
            </transition-group>
            <div class="text-right" v-if="!cartList.lenght">
                <span class="text-lg font-semibold mr-2">Total:</span>
                <span class="text-lg font-semibold text-secondary-200">R$ {{ formatPrice(getCartTotal) }}</span>
            </div>
            <button @click="goToPayment" class="w-full p-3 bg-primary-500 rounded-lg  text-white font-medium" >Finalizar Compra</button>
        </div>
    </div>
</template>

<script>
import { RouterLink } from 'vue-router';
import { mapGetters } from 'vuex'

import CartItem from './CartItem.vue';

export default {
    name: 'Cart',

    components: {
        CartItem,
        RouterLink,
        
    },
    methods: {
        formatPrice(value) {
            let val = (value / 1).toFixed(2).replace('.', ',')
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        },
        goToPayment() {
            this.$router.push({name:'Payment'})
        }
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

<style scoped>

.list-enter-active, .list-leave-active {
    transition: all 1s ease;
}
.list-enter-from, .list-leave-to {
    opacity: 0;
    transform: translateX(-30px);
}
</style>

