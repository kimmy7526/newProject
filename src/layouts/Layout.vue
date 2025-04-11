<template>
    <div class="flex flex-col min-h-screen">
        <Header />
        <main class="flex-1 py-24 bg-background text-text">
            <RouterView />
        </main>
        <Footer />
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Header from './Header.vue'
import Footer from './Footer.vue'

const isMounted = ref(false)

onMounted(() => {

})
</script>