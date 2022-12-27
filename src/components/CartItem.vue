<template>
    <div class="flex py-4 items-center border-b flex-wrap">
        <div class="flex w-full md:w-max md:order-2">
            <div class="bg-secondary-100 rounded-xl mr-4 mb-2">
                <img :src="imagePath" alt="" class="w-24">
            </div>
            <div class="">
                <h3 class="font-semibold text-lg">{{ item.name }}</h3>
                <a href="" class="font-medium text-xs text-gray-400">Adicionar Observação</a>
            </div>
        </div>
        <Quantity :item="item"/>
        <p class="text-secondary-200 font-bold text-lg text-right ml-3 md:order-3 grow">
            R$ {{ formatPrice(item.price) }}
        </p>
    </div>
</template>

<script>
import Quantity from './Quantity.vue'
import { mapActions } from 'vuex'

export default {
    name: 'Cartitem',
    props: {
        item: {}
    },
    methods: {
        formatPrice(value) {
            let val = (value / 1).toFixed(2).replace('.', ',')
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        },
        ...mapActions([
            'increaseQuantity',
            'decreaseQuantity'
        ])
    },
    computed: {
        imagePath() {
            return (`../src/assets/images/${this.item.id}.png`);
        }
    },
    components: {
        Quantity
    }
}
</script>