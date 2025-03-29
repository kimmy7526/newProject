<template>
    <div>
        <Header></Header>
    </div>
    <RouterView/>
    <div class="bg-[url('public/images/pexels-steve-johnson-858076.jpg')] bg-fixed bg-center bg-cover p-5">
        <Footer></Footer>
    </div>
</template>

<script setup lang="ts">
import Header from './Header.vue';
import Footer from './Footer.vue';
</script>