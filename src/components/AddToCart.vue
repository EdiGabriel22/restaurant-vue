<template>
  <div class="bg-gray-100 h-screen w-full p-6 md:p-16 gap-3 ">
    <RouterLink to="/" class="font-bold text-xl md:hidden">← Voltar</RouterLink>
    <Item :item="item" />
    <div class="flex p-4 border-2 border-gray-200  rounded-md mb-6 justify-between">
        <span class="font-semibold text-sm">Quantidade</span>
        <Quantity :item="item" :useStore="false"/>
    </div>
    <div>
        <p class="mb-2 font-semibold text-sm">Observações</p>
        <textarea class="w-full border-2 border-gray-200 rounded-md p-2" v-model="observations" rows="10"></textarea>
    </div>
    <button class="w-full p-3 bg-primary-500 rounded-lg text-white font-medium mt-6" @click="onAddToCartButtonClick">Adicionar ao Carrinho</button>
  </div>
</template>

<script>
import axios from 'axios'
import Item from './Item.vue'
import Quantity from './Quantity.vue'

export default {    
    props: ['id'],
    data() {
        return {
            item: {},
            observations: ''
        }
    },
    created() {
        axios.get(`http://localhost:3000/${this.selectedCategory}/${this.id}`).then((response) => {
            this.item = {quantity:1, ...response.data};
            // this.isLoading = false;
        });
    },
    computed: {
        selectedCategory() {
            return this.$store.state.selectedCategory
        }
    },
    methods: {
        onAddToCartButtonClick() {
            this.$store.dispatch('addToCart', this.item);
            this.$router.push({name: 'Home'})
        }
    },  
    components: {
        Item,
        Quantity
    }
}
</script>

<style>

</style>