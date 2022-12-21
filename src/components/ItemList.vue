<template>
    <div class="flex flex-wrap  gap-8 p-8">
        <Item
            v-for="item in itemsList"
            :key="item.id"
            :item="item"
        />
    </div>
</template>

<script>
import axios from 'axios';
import Item from './Item.vue';

export default {
    name: 'ItemsList',
    components: {
        Item
    },
    data() {
        return {
            itemsList: []
        }
    },  
    created() {
        axios.get('http://localhost:3000/burguers').then((response) => {
            this.itemsList = response.data;
        });
    }
}
</script>