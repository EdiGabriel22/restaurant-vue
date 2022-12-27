<template>
    <div class="flex gap-2 items-center mx-5 md:order-1">
        <button @click="decreaseQuantity(item.id)" :disabled="item.quantity == 1">
            <font-awesome-icon icon="fa-minus" />
        </button>
        <span class="font-normal text-lg text-secondary-200 w-3">{{ item.quantity }}</span>
        <button @click="increaseQuantity(item.id)">
            <font-awesome-icon icon="fa-plus" />
        </button>
    </div> 
</template>

<script>
import { mapActions} from 'vuex'

export default {
    props: {
        item: {

        }
    },
    methods: {
        ...mapActions([
            'increaseQuantity',
            'decreaseQuantity'
        ])
    },
}
</script>

