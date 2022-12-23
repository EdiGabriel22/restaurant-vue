<template>
    <div class=" bg-gray-50 w-full h-40 md:w-56 md:h-80 p-3 md:p-5 rounded-xl relative my-5 md:m-5 border-2 border-gray-200 items-center  md:flex-col flex justify-between">
        <div
            class="bg-primary-500 rounded-lg text-white text-xs font-medium w-14 p-1 flex justify-center absolute -top-3 -right-4"
            v-if="item.offer"
        >
            OFERTA
        </div>
        <img
            src="../assets/images/0001.png"
            alt=""
            class="block w-36 h-fit md:w-full"
        >
        <div class="col md:col-12 flex flex-col justify-between h-28	">
            <div>
                <h2 class="font-bold text-lg">{{ item.name }}</h2>
                <p class="text-dark-500 font-light text-xs">{{ item.description }}</p>
            </div>
            <p class="text-secondary-300 font-bold text-lg text-right">R$ {{ formatPrice(item.price) }} </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Item',
    props: {
        item: {}
    },
    methods: {
        formatPrice(value) {
            let val = (value / 1).toFixed(2).replace('.', ',')
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        }
    }
}
</script>