<template>
    <div class="md:col-6  md:h-screen p-6 md:p-14 flex flex-wrap content-start">
        <Loading v-if="isLoading" />
        <Item v-for="item in itemsList" :key="item.id" :item="item" />
    </div>
</template>

<script>
import axios from 'axios';
import Item from './Item.vue';
import Loading from '@/components/Loading.vue'

export default {
    name: 'ItemsList',
    components: {
        Item,
        Loading
    },
    data() {
        return {
            itemsList: [],
            isLoading: false
        }
    },
    created() {
        this.getItemsList()
    },
    computed: {
        selectedCategory() {
            return this.$store.state.selectedCategory;
        }
    },
    methods: {
        getItemsList() {
            this.isLoading = true;
            this.itemsList = [];
            setTimeout(() => {
                axios.get(`http://localhost:3000/${this.selectedCategory}`).then((response) => {
                    this.itemsList = response.data;
                    this.isLoading = false;
                });
            }, 500)
        }
    },
    watch: {
        selectedCategory() {
            this.getItemsList();
        }
    }
}
</script>