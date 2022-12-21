<template>
    <div class=" ">
        <div class=" bg-gray-50 w-56 p-12">
            <h2>{{ item.name }}</h2>
            <p>{{ item.description }}</p>
            <p>{{ item.price }}</p>
        </div>

    </div>
</template>

<script>
export default {
    name: 'Item',
    props: {
        item: []
    }
}
</script>