<template>
    <div class="p-4">
        <form action="" class="flex flex-col gap-12">
            <div>
                <p class="text-2xl font-bold mb-8">Seus dados</p>
                <div>
                    <label for="" class="text-lg font-semibold">{{ formData.name.label }}</label>
                    <input 
                        type="text" 
                        :class="{ 'border-red-500' : formData.name.valid}"
                        :placeholder="formData.name.placeholder"
                        v-model="formData.name.value"
                        @blur="formData.name.isValid()" 
                        class="w-full p-2 rounded-md border-2 mt-2"
                    >
                    <p v-if="formData.name.valid" class="text-red-500 text-sm mt-1">{{formData.name.errorMessage}}</p>
                </div>
                <div>
                    <label for="" class="text-lg font-semibold">{{ formData.cellphone.label }}</label>
                    <input 
                        type="text" 
                        :class="{ 'border-red-500' : formData.cellphone.valid}" 
                        :placeholder="formData.cellphone.placeholder" 
                        maxlength = "16"
                        v-mask="'(##) # ####-####'"
                        v-model="formData.cellphone.value" 
                        @blur="formData.cellphone.isValid()" 
                        class="w-full p-2 rounded-md border-2 mt-2"
                    >
                    <p v-if="formData.cellphone.valid" class="text-red-500 text-sm mt-1">{{formData.cellphone.errorMessage}}</p>
                </div>

            </div>
            <div>
                <p class="text-2xl font-bold mb-6">Endereço</p>
                <div class="flex gap-4 mb-4">
                    <div class="gap-2 flex ">
                        <input type="radio" name="" id="store" value="store" v-model="deliveryType">
                        <label for="store">Retirar na loja</label>
                    </div>
                    <div class="gap-2 flex ">
                        <input type="radio" name="" id="delivery" value="delivery" v-model="deliveryType">
                        <label for="delivery">Delivery</label>
                    </div>
                </div>
                <p class="cursor-pointer text-primary-500" @click="showAddressModal" v-if="isDeliveryType">Adicionar endereço</p>
            </div>
        </form>
        <button 
            @click="orderItens" 
            class="w-full mt-12 p-3 bg-primary-500 rounded-lg text-white font-medium"
        >
            Concluir pagamento
        </button>

        <Modal :show="AddressModal" @on-modal-close="hideShowModal">
            <div class="flex flex-col gap-6">
                <h1 class="text-2xl font-bold">Adicionar endereço</h1>
                <div>
                    <label for="" class="text-lg font-semibold">{{ formData.cep.label }}</label>
                    <input 
                        type="text" 
                        :class="{ 'border-red-500' : formData.cep.valid}"
                        :placeholder="formData.cep.placeholder"
                        v-model="formData.cep.value"
                        @blur="formData.cep.isValid()" 
                        class="w-full p-2 rounded-md border-2 mt-2"
                    >
                    <p v-if="formData.cep.valid" class="text-red-500 text-sm mt-1">{{formData.cep.errorMessage}}</p>
                </div>
                <div>
                    <label for="" class="text-lg font-semibold">{{ formData.city.label }}</label>
                    <input 
                        type="text" 
                        :class="{ 'border-red-500' : formData.city.valid}"
                        :placeholder="formData.city.placeholder"
                        v-model="formData.city.value"
                        @blur="formData.city.isValid()" 
                        class="w-full p-2 rounded-md border-2 mt-2"
                    >
                    <p v-if="formData.city.valid" class="text-red-500 text-sm mt-1">{{formData.city.errorMessage}}</p>
                </div>

                <div class="flex gap-2">
                    <div class="col-8">
                        <label for="" class="text-lg font-semibold">{{ formData.street.label }}</label>
                        <input 
                            type="text" 
                            :class="{ 'border-red-500' : formData.street.valid}"
                            :placeholder="formData.street.placeholder"
                            v-model="formData.street.value"
                            @blur="formData.street.isValid()" 
                            class="w-full p-2 rounded-md border-2 mt-2"
                        >
                        <p v-if="formData.street.valid" class="text-red-500 text-sm mt-1">{{formData.street.errorMessage}}</p>
                    </div>
                    <div class="col">
                        <label for="" class="text-lg font-semibold">{{ formData.number.label }}</label>
                        <input 
                            type="text" 
                            :class="{ 'border-red-500' : formData.number.valid}"
                            :placeholder="formData.number.placeholder"
                            v-model="formData.number.value"
                            @blur="formData.number.isValid()" 
                            class="w-full p-2 rounded-md border-2 mt-2"
                        >
                        <p v-if="formData.number.valid" class="text-red-500 text-sm mt-1">{{formData.number.errorMessage}}</p>
                    </div>
                    
                </div>
                <div class="md:flex  gap-4 text-white font-bold mt-4">
                    <button @click="hideShowModal" class="bg-gray-100 px-4 py-2 rounded-lg text-dark-900 w-full mb-4 md:m-0">Cancelar</button>
                    <button @click="validateAddressForm" class="bg-primary-500 px-4 py-2 rounded-lg w-full">Salvar</button>
                </div>
            </div>
        </Modal>
    </div>
</template>

<script>
import Modal from './Modal.vue';

export default {
    data() {
        return {
            formData: {
                name: {
                    errorMessage: 'O nome é obrigatório',
                    placeholder: 'Digite o seu nome' ,
                    value: '',
                    label: 'Nome*',
                    valid: true,
                    isValid: () => {
                        this.formData.name.valid = !!this.formData.name.value.lenght;
                    }
                },
                cellphone: {
                    errorMessage: 'O celular é obrigatório',
                    placeholder: 'Digite seu celular' , 
                    value: '',
                    label: 'Celular*',
                    valid: true,
                    isValid: () => {
                        this.formData.cellphone.valid = !!this.formData.cellphone.value.lenght === 16;
                    }
                },
                cep: {
                    errorMessage: 'O CEP é obrigatório',
                    placeholder: 'Digite seu CEP' , 
                    value: '',
                    label: 'CEP*',
                    valid: true,
                    isValid: () => {
                        this.formData.cep.valid = !!this.formData.cep.value.lenght;
                    }
                },
                city: {
                    errorMessage: 'O Cidade é obrigatório',
                    placeholder: 'Digite seu Cidade' , 
                    value: '',
                    label: 'Cidade*',
                    valid: true,
                    isValid: () => {
                        this.formData.city.valid = !!this.formData.city.value.lenght;
                    }
                },
                street: {
                    errorMessage: 'O Cidade é obrigatório',
                    placeholder: 'Digite seu Cidade' , 
                    value: '',
                    label: 'Rua*',
                    valid: true,
                    isValid: () => {
                        this.formData.street.valid = !!this.formData.street.value.lenght;
                    }
                },
                number: {
                    errorMessage: 'O Cidade é obrigatório',
                    placeholder: 'Digite seu Cidade' , 
                    value: '',
                    label: 'Número*',
                    valid: true,
                    isValid: () => {
                        this.formData.number.valid = this.formData.number.value.lenght;
                    }
                },
                
            },
            AddressModal: false,
            deliveryType: 'delivery'
        }
    },  
    computed: {
        isAddressFormValid() {
            let isValid = true
            isValid &= this.formData.cep.Valid();
            isValid &= this.formData.city.Valid();
            isValid &= this.formData.street.Valid();
            isValid &= this.formData.number.Valid();
            return isValid;
        },
        isDeliveryType() {
            return this.deliveryType === 'delivery'
        },
        hasAddressInfo() {
            let hasInfo = true
            
            hasInfo &= this.formData.cep.value;
            hasInfo &= this.formData.city.value;
            hasInfo &= this.formData.street.value;
            hasInfo &= this.formData.number.value;
        }
    },  
    methods: {
        triggerValidations() {
            this.formData.name.isValid();
            this.formData.cellphone.isValid();
        },  
        triggerAddressFormValidations() {
            this.formData.cep.isValid();
            this.formData.city.isValid();
            this.formData.street.isValid();
            this.formData.number.isValid();
        },
        orderItens() {
            this.triggerValidations();
        },
        showAddressModal() {
            this.AddressModal = true;
        },
        hideShowModal() {
            this.AddressModal = false
        },
        validateAddressForm() {
            this.triggerAddressFormValidations();
            this.AddressModal = false
        }
    },
    components: {
        Modal
    }
}
</script>