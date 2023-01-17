<template>
    <div class="bg-white p-4 m-4 rounded-lg">
        <form class="flex-col flex gap-4">
            <div class="flex flex-col gap-3">
                <p class="font-bold text-xl mb-4">Seus dados</p>
                <div class="flex flex-col gap-1">
                    <label class="font-semibold" for="">{{ formData.name.label }}</label>
                    <input
                        class="border-2 rounded-lg p-1"
                        type="text"
                        :placeholder="formData.name.placeholder"
                        v-model="formData.name.value"
                        @blur="formData.name.isValid()"
                        :class="{ 'border-red-500' : !formData.name.valid }"
                    />
                    <p class="text-red-500" v-if="!formData.name.valid">{{ formData.name.errorMessage }}</p>
                </div>
                <div  class="flex flex-col gap-1">
                    <label class="font-semibold" for="">{{ formData.cellphone.label }}</label>
                    <input
                        class="border-2 rounded-lg p-1"
                        type="text"
                        :placeholder="formData.cellphone.placeholder"
                        v-mask="'(##) # ####-####'"
                        v-model="formData.cellphone.value"
                        @blur="formData.cellphone.isValid()"
                        :class="{ 'border-red-500' : !formData.cellphone.valid }"
                    />
                    <p class="text-red-500" v-if="!formData.cellphone.valid">{{ formData.cellphone.errorMessage }}</p>
                </div>
            </div>

            <div class="">
                <p class="font-bold text-xl mb-4">Endereço</p>
                <div class="flex gap-2">
                    <div>
                        <input type="radio" name="delivery-type" id="store" value="store" v-model="deliveryType" />
                        <label for="store">Retirar na loja</label>
                    </div>

                    <div class="">
                        <input
                            type="radio"
                            name="delivery-type"
                            id="delivery"
                            value="delivery"
                            v-model="deliveryType"
                        />
                        <label for="delivery">Delivery</label>
                    </div>
                </div>

                <div class="border w-fit p-3 rounded-lg my-4" v-if="isDeliveryType && hasAddressInfo && savedAddress">
                    <p>{{ formData.city.value }} - {{ formData.cep.value }}</p>
                    <p>{{ formData.street.value }}, {{ formData.number.value }}</p>
                </div>

                <a class="text-primary-500" @click="onShowAddressModal" v-if="isDeliveryType">{{ addressButtonLabel }}</a>
            </div>

            <div class="">
                <p class="font-bold text-xl mb-4">Pagamento</p>
                <p class="font-semibold mb-2">Método de pagamento:</p>
                <div class="flex gap-2">
                    <div class="">
                        <input
                            type="radio"
                            name="payment-type"
                            id="credit-card"
                            value="credit-card"
                            v-model="paymentType"
                        />
                        <label for="credit-card">Cartão</label>
                    </div>
                    <div class="">
                        <input type="radio" name="payment-type" id="cash" value="cash" v-model="paymentType" />
                        <label for="cash">Dinheiro</label>
                    </div>
                </div>
            </div>
        </form>
        <button class="bg-primary-500 my-4 px-4 py-2 rounded-lg w-full text-white font-bold" @click="orderItens">Concluir pedido</button>

        <Modal :show="showAddressModal" @on-modal-close="hideAddressModal">
            <div class="flex flex-col gap-5">
                <h1 class="font-bold text-xl mb-4">Adicionar endereço</h1>
                <div  class="flex flex-col gap-1">
                    <label class="font-semibold" for="">{{ formData.cep.label }}</label>
                    <input
                        class="border-2 rounded-lg p-1 w-80"
                        type="text"
                        :placeholder="formData.cep.placeholder"
                        v-model="formData.cep.value"
                        @blur="formData.cep.isValid()"
                        :class="{ error: !formData.cep.valid }"
                    />
                    <p class="text-red-500" v-if="!formData.cep.valid">{{ formData.cep.errorMessage }}</p>
                </div>

                <div  class="flex flex-col gap-1">
                    <label class="font-semibold" for="">{{ formData.city.label }}</label>
                    <input
                        class="border-2 rounded-lg p-1 w-80"
                        type="text"
                        :placeholder="formData.city.placeholder"
                        v-model="formData.city.value"
                        @blur="formData.city.isValid()"
                        :class="{ error: !formData.city.valid }"
                    />
                    <p class="text-red-500" v-if="!formData.city.valid">{{ formData.city.errorMessage }}</p>
                </div>

                <div class="flex flex-col gap-5">
                    <div  class="flex flex-col gap-1">
                        <label class="font-semibold" for="">{{ formData.street.label }}</label>
                        <input
                            class="border-2 rounded-lg p-1 w-80"
                            type="text"
                            :placeholder="formData.street.placeholder"
                            v-model="formData.street.value"
                            @blur="formData.street.isValid()"
                            :class="{ error: !formData.street.valid }"
                        />
                        <p class="text-red-500" v-if="!formData.street.valid">{{ formData.street.errorMessage }}</p>
                    </div>

                    <div  class="flex flex-col gap-1">
                        <label class="font-semibold" for="">{{ formData.number.label }}</label>
                        <input
                            class="border-2 rounded-lg p-1 w-80"
                            type="text"
                            :placeholder="formData.number.placeholder"
                            v-model="formData.number.value"
                            @blur="formData.number.isValid()"
                            :class="{ error: !formData.number.valid }"
                        />
                        <p class="text-red-500" v-if="!formData.number.valid">{{ formData.number.errorMessage }}</p>
                    </div>
                </div>

                <div class="flex flex-col gap-2">
                    <button  class="bg-primary-500  px-4 py-2 rounded-lg w-full text-white font-bold" @click="validateAddressForm">Adicionar</button>
                    <button  class="bg-gray-300  px-4 py-2 rounded-lg w-full text-white font-bold" @click="hideAddressModal">Cancelar</button>
                </div>
            </div>
        </Modal>

        <Modal :show="showInvalidAddressModal" @on-modal-close="hideInvalidAddressModal">
            <div class="flex flex-col">
                <font-awesome-icon icon="fa-circle-exclamation" class="mb-6 cursor-pointer fa-2xl text-red-500"/>
                <span class="text-center font-semibold">Na modalidade delivery é necessário adicionar um endereço válido.</span>
            </div>
        </Modal>

        <Modal :show="showSuccessModal" @on-modal-close="hideSuccessModal">
            <div class="flex flex-col">
                <font-awesome-icon icon="fa-check" class="mb-6 cursor-pointer fa-2xl text-green-500"/>
                <span class="text-center font-semibold">Pedido realizado com sucesso!</span>
            </div>
        </Modal>
    </div>
</template>

<script>
import Modal from '../components/Modal.vue';

export default {
    components: {
        Modal
    },
    data() {
        return {
            formData: {
                name: {
                    value: '',
                    placeholder: 'Digite seu nome',
                    errorMessage: 'O nome é obrigatório',
                    label: 'Nome*',
                    valid: true,
                    isValid: () => {
                        this.formData.name.valid = !!this.formData.name.value.length;
                    }
                },
                cellphone: {
                    value: '',
                    placeholder: 'Digite seu celular',
                    errorMessage: 'O celular é obrigatório',
                    label: 'Celular*',
                    valid: true,
                    isValid: () => {
                        this.formData.cellphone.valid = this.formData.cellphone.value.length === 16;
                    }
                },
                cep: {
                    value: '',
                    placeholder: 'Digite seu cep',
                    errorMessage: 'O cep é obrigatório',
                    label: 'CEP*',
                    valid: true,
                    isValid: () => {
                        this.formData.cep.valid = !!this.formData.cep.value.length;
                    }
                },
                city: {
                    value: '',
                    placeholder: 'Digite sua cidade',
                    errorMessage: 'A cidade é obrigatória',
                    label: 'Cidade*',
                    valid: true,
                    isValid: () => {
                        this.formData.city.valid = !!this.formData.city.value.length;
                    }
                },
                street: {
                    value: '',
                    placeholder: 'Digite sua rua',
                    errorMessage: 'A rua é obrigatória',
                    label: 'Rua*',
                    valid: true,
                    isValid: () => {
                        this.formData.street.valid = !!this.formData.street.value.length;
                    }
                },
                number: {
                    value: '',
                    placeholder: 'Digite o número',
                    errorMessage: 'O número é obrigatório',
                    label: 'Número*',
                    valid: true,
                    isValid: () => {
                        this.formData.number.valid = !!this.formData.number.value.length;
                    }
                }
            },
            showAddressModal: false,
            showInvalidAddressModal: false,
            showSuccessModal: false,
            deliveryType: 'store',
            paymentType: 'credit-card',
            savedAddress: false
        };
    },
    computed: {
        isAddressFormValid() {
            let isValid = true;
            isValid &= this.formData.cep.valid;
            isValid &= this.formData.city.valid;
            isValid &= this.formData.street.valid;
            isValid &= this.formData.number.valid;
            return isValid;
        },
        isUserFormDataValid() {
            let isValid = true;
            isValid &= this.formData.cellphone.valid;
            isValid &= this.formData.name.valid;
            return isValid;
        },
        isDeliveryType() {
            return this.deliveryType === 'delivery';
        },
        hasAddressInfo() {
            return (
                this.formData.cep.value ||
                this.formData.city.value ||
                this.formData.street.value ||
                this.formData.number.value
            );
        },
        addressButtonLabel() {
            return this.hasAddressInfo ? 'Editar endereço' : 'Adicionar Endereço';
        },
        orderTextWhatsApp() {
            let text = `
              Cliente: ${this.formData.name.value}
              Contato: ${this.formData.cellphone.value}
              Pedido:
              ${this.$store.state.cartList.map((item) => {
                  return `
                  ${item.quantity}x ${item.name}
                  Obs: ${item.observations}  
                `;
              })}
            `;

            text = window.encodeURIComponent(text);
            return text;
        }
    },
    methods: {
        triggerValidations() {
            this.formData.name.isValid();
            this.formData.cellphone.isValid();
            if (this.isDeliveryType) {
                this.triggerAddressFormValidations();
                this.showInvalidAddressModal = !this.isAddressFormValid;
            }
        },
        triggerAddressFormValidations() {
            this.formData.cep.isValid();
            this.formData.city.isValid();
            this.formData.street.isValid();
            this.formData.number.isValid();
        },
        orderItens() {
            this.triggerValidations();
            if (!this.isUserFormDataValid || !this.isAddressFormValid) return;
            this.showSuccessModal = true;
            const phone = '5543999310720';
            window.open(`https://api.whatsapp.com/send?phone=${phone}&text=${this.orderTextWhatsApp}`);
        },
        onShowAddressModal() {
            this.showAddressModal = true;
        },
        hideAddressModal() {
            this.showAddressModal = false;
        },
        hideSuccessModal() {
            this.$store.dispatch('clearCart');
            this.$router.push({ name: 'Home' });
        },
        validateAddressForm() {
            this.triggerAddressFormValidations();
            if (!this.isAddressFormValid) return;
            this.savedAddress = true;
            this.showAddressModal = false;
        },
        hideInvalidAddressModal() {
            this.showInvalidAddressModal = false;
        }
    }
};
</script>

