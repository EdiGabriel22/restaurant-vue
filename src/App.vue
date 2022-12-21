<template>
    <ul>
        <li>        <router-link :to="{name: 'home'}">home</router-link></li>
        <li>        <router-link :to="{name: 'about'}">about</router-link></li>

    </ul>
    <router-view/>



</template>

<script>
import { RouterView, RouterLink} from 'vue-router'
</script>
