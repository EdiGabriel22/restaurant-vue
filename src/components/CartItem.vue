<template>
    <div class="flex py-4 items-center border-b flex-wrap">
        <div class="flex w-full md:w-max md:order-2">
            <div class="bg-secondary-100 rounded-xl mr-4 mb-2">
                <img :src="imagePath" alt="" class="w-24">
            </div>
            <div class="">
                <h3 class="font-semibold text-lg">{{ item.name }}</h3>
                <a @click="onshowObservationModal" class="font-medium text-xs text-gray-400 cursor-pointer">
                    Adicionar Observação
                </a>
                <p class="font-medium text-xs text-gray-400">{{ item.observations }}</p>
            </div>
        </div>
        <Quantity :item="item" />
        <p class="text-secondary-200 font-bold text-lg text-right ml-3 md:order-3 grow">
            R$ {{ formatPrice(item.price) }}
        </p>
        <Modal :show="showObservationModal" @on-modal-close="onCloseObservationModal">
            <div>
                <h1 class="font-semibold text-xl mr-6 mb-6">Adicionar observação</h1>
                <textarea v-model="item.observations" class="w-full border-2 border-gray-200 rounded-md bg-gray-50 p-2" rows="10"></textarea>
                <div class="md:flex  gap-4 text-white font-bold mt-4">
                    <button @click="onCloseObservationModal"
                        class="bg-gray-100 px-4 py-2 rounded-lg text-dark-900 w-full mb-4 md:m-0">Cancelar</button>
                    <button @click="saveObservation" class="bg-primary-500 px-4 py-2 rounded-lg w-full">Salvar</button>
                </div>
            </div>
        </Modal>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

import Modal from './Modal.vue'
import Quantity from './Quantity.vue'

export default {
    name: 'CartItem',
    props: {
        item: {},
    },
    data() {
        return {
            showObservationModal: false
        }
    },
    methods: {
        formatPrice(value) {
            let val = (value / 1).toFixed(2).replace('.', ',')
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        },
        ...mapActions([
            'increaseQuantity',
            'decreaseQuantity'
        ]),
        onshowObservationModal() {
            this.showObservationModal = true
        },
        onCloseObservationModal() {
            this.showObservationModal = false
        },
        saveObservation() {
            this.$store.dispatch('addObservation', this.item);
            this.showObservationModal = false
        }
    },
    computed: {
        imagePath() {
            return (`../src/assets/images/${this.item.id}.png`);
        }
    },
    components: {
        Quantity,
        Modal
    }
}
</script>