<template>
    <div class="flex gap-2 items-center mx-5 md:order-1">
        <button @click="onDecreaseButtonClick(item.id)" :disabled="item.quantity == 1">
            <font-awesome-icon icon="fa-minus" />
        </button>
        <span class="font-normal text-lg text-secondary-200 w-3">{{ item.quantity }}</span>
        <button @click="onIncreaseButtonClick(item.id)">
            <font-awesome-icon icon="fa-plus" />
        </button>
    </div> 
</template>

<script>
import { mapActions} from 'vuex'

export default {
    props: {
        item: {},
        useStore: {
            type: Boolean,
            default: true
        }
    },
    methods: {
        ...mapActions([
            'increaseQuantity',
            'decreaseQuantity'
        ]),
        onDecreaseButtonClick() {
            if(this.useStore) {
                this.decreaseQuantity(this.item.id);
                return
            }

            --this.item.quantity;
        },
        onIncreaseButtonClick() {
            if(this.useStore) {
                this.increaseQuantity(this.item.id);
                return
            }

            ++this.item.quantity
        },

    },
}
</script>

