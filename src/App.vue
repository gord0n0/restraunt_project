<script setup>
import { RouterLink, RouterView } from 'vue-router';
import Navbar from './components/Navbar.vue'
</script>

<template>
    <v-app>
        <Navbar/>
        <v-main>
            <RouterView/>
        </v-main>
        
    
 
    </v-app>

</template>

