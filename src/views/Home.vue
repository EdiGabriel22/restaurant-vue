<template>
    <div class=" md:flex">
        <CategoryMenu />
        <ItemListVue />
    </div>
</template>

<script>
import CategoryMenu from '@/components/CategoryMenu.vue'
import ItemListVue from '@/components/ItemList.vue'

export default {
    name: 'Home',
    components: {
        CategoryMenu,ItemListVue
    },
}
</script>
