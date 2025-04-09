<template>
    <div class="">
        <Header></Header>
    </div>
    <div class="py-24 bg-background text-text">
        <RouterView />
    </div>
    <Footer></Footer>
</template>

<script setup lang="ts">
import Header from './Header.vue';
import Footer from './Footer.vue';
</script>