<template>
    <div>
        <CategoryMenu/> 
    </div>
</template>

<script >
import CategoryMenu from './components/CategoryMenu.vue';
import HelloWorld from './components/HelloWorld.vue';


    export default {
        name: 'App',
        components: {
            HelloWorld,
            CategoryMenu
        }
    }
</script>
