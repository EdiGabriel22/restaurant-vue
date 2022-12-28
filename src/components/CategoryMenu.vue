<template>
    <div class=" col md:col-1 md:h-screen flex items-center overflow-scroll	md:overflow-hidden bg-gray-50 sticky top-0 z-10">
        <ul class=" flex md:flex-col md:w-full  p-3 gap-3 ">
            <li class="flex md:w-full flex-col items-center justify-center cursor-pointer gap-2 w-20 p-3 rounded-lg hover:bg-gray-100 "
                v-for="category in categoriesList" :key="category.id" @click="onCategoryClick(category.id)"
                :class="{ 'bg-secondary-200 rounded-lg hover:bg-secondary-200': isActive(category.id) }">
                <font-awesome-icon :icon="category.icon" class="text-gray-500 fa-2xl"
                    :class="{ 'text-dark-900 fa-regular': isActive(category.id) }" />
                <p class="text-gray-500 font-medium" :class="{ 'text-dark-900 rounded-lg': isActive(category.id) }">
                    {{ category.label }}
                </p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'CategoryMenu',
    data() {
        return {
            categoriesList: [
                { label: 'Pizza', icon: 'pizza-slice', id: 'pizza' },
                { label: 'Combo', icon: 'champagne-glasses', id: 'combo' },
                { label: 'Doces', icon: 'ice-cream', id: 'deserts' },
                { label: 'Bebidas', icon: 'fa-wine-bottle', id: 'drinks' },
                { label: 'Burguers', icon: 'burger', id: 'burguers' },
            ],
            selectedCategory: ''
        }
    },
    mounted() {
        this.onCategoryClick('pizza')
    },
    methods: {
        onCategoryClick(id) {
            this.selectedCategory = id;
            this.$store.dispatch('changeCategory', id)
        },
        isActive(id) {
            return this.selectedCategory === id;
        }
    },

}
</script>