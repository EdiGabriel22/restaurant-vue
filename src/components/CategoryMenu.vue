<template>
    <div class=" md:w-32 md:h-screen flex items-center overflow-scroll	md:overflow-hidden bg-gray-50">
        <ul class=" flex md:flex-col md:w-full  p-2 gap-3 ">
            <li 
                class="flex md:w-full flex-col items-center justify-center cursor-pointer gap-1 w-20 p-2" 
                v-for="category in categoriesList"
                :key="category.id"
                @click="onCategoryClick(category.id)" 
                :class="{ 'bg-secondary-300 rounded-lg': isActive(category.id) }"
            >
                <component :is="category.icon"/>
                <p 
                    class="text-gray-500 font-medium"
                    :class="{ 'text-dark-900 rounded-lg': isActive(category.id) }" 
                >
                    {{ category.label }}
                </p>
            </li>
        </ul>
    </div>
</template>

<script>

import Pizza from '@/assets/icons/pizza.svg'
import Combo from '@/assets/icons/french-fries.svg'
import Deserts from '@/assets/icons/ice-cream.svg'
import Drinks from '@/assets/icons/smothie.svg'
import Burguer from '@/assets/icons/food.svg'



export default {
    name: 'CategoryMenu',

    data() {
        return {
            categoriesList: [
                { label: 'Pizza', icon: 'Pizza', id: 'pizza' },
                { label: 'Combo', icon: 'Combo', id: 'combo' },
                { label: 'Doces', icon: 'Deserts', id: 'deserts' },
                { label: 'Bebidas', icon: 'Drinks', id: 'drinks' },
                { label: 'Burguers', icon: 'Burguer', id: 'burguer' },
            ],
            selectedCategory: 'pizza'
        }
    },
    methods: {
        onCategoryClick(id) {
            this.selectedCategory = id;
        },
        isActive(id) {
            return this.selectedCategory === id;
        }
    },
    components: {
        Burguer, Drinks, Deserts, Combo, Pizza
    }
}
</script>