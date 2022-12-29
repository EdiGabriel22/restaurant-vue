<template>
    <div class="flex gap-2 items-center mx-5 md:order-1 bg-red">
        <button @click="onDecreaseButtonClick(item.id)" :disabled="item.quantity == 0">
            <font-awesome-icon icon="fa-minus" />
        </button>
        <span class="font-normal text-lg text-secondary-200 w-3">{{ item.quantity }}</span>
        <button @click="onIncreaseButtonClick">
            <font-awesome-icon icon="fa-plus" />
        </button>
        <Modal :show="showModal" @on-modal-close="onCancelButtonClick">
            <div class="">
                <h2 class="font-bold text-xl mb-8">Deseja remover esse item do carrinho?</h2>
                <div class="md:flex  gap-4 text-white font-bold">
                    <button @click="onCancelButtonClick" class="bg-gray-100 px-4 py-2 rounded-lg text-dark-900 w-full mb-4 md:mb-0">Cancelar</button>
                    <button @click="onRemoveButtonClick" class="bg-primary-500 px-4 py-2 rounded-lg w-full">Sim, remover</button>
                </div>
            </div>
        </Modal> 
    </div>
</template>

<script>
import { mapActions} from 'vuex'

import Modal from './Modal.vue';

export default {
    props: {
        item: {},
        useStore: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            showModal: false
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
                if(!this.item.quantity) this.showModal = true;
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
        onCancelButtonClick() {
            this.increaseQuantity(this.item.id);
            this.showModal = false
        },
        onRemoveButtonClick() {
            this.showModal = false;
            this.$nextTick(() => {
                this.$store.dispatch('removeFromCart', this.item.id)

            })
        },
    },
    components: {
        Modal
    }
}
</script>

