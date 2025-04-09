<template>
    <div class="bg-[url('public/images/background.png')] bg-fixed bg bg-cover p-8">
        <div class="backdrop-blur-md bg-white/0 text-white">
            <h3 class="text-center pt-4">聯絡</h3>
            <div class="flex flex-col gap-4 md:flex-row justify-around p-8">
                <!-- left -->
                <div class="relative group w-[150px] h-[45px]">
                    <a href="https://github.com/kimmy7526" target="_blank" class="w-full h-full">
                        <button class="flex items-center w-full h-full">
                            <span
                                class="absolute left-0 top-0 w-10 h-10 bg-black bg-opacity-25 rounded-full transition-all duration-500 group-hover:w-full flex items-center">
                                <i class="fa fa-3x fa-github"></i>
                            </span>
                            <span class="ml-14">GitHub</span>
                        </button>
                    </a>
                </div>
                <!-- right -->
                <div class="relative group w-[150px] h-[45px]">
                    <a href="mailto:kimmy7526@gmail.com" class="w-full h-full">
                        <button class="flex items-center w-full h-full">
                            <span
                                class="absolute left-0 top-0 w-10 h-10 bg-black bg-opacity-25 rounded-full transition-all duration-500 group-hover:w-full flex items-center">
                                <i class="fa fa-2x fa-envelope"></i>
                            </span>
                            <span class="ml-14">Gmail</span>
                        </button>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
@import 'font-awesome/css/font-awesome.min.css';
</style>