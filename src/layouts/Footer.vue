<template>
    <div class="backdrop-blur-md bg-white/0 text-gray-50">
        <div class="text-center text-lg mb-5">
            <p>方向比努力更重要</p>
            <p>Direction is more important than effort</p>
        </div>
        <div class="flex justify-around">
            <!-- left -->
            <div class="relative group w-[150px] h-[45px]">
                <a href="https://github.com/kimmy7526" target="_blank" class="w-full h-full">
                    <button class="flex items-center w-full h-full">
                        <span
                            class="absolute left-0 top-0 w-10 h-10 bg-black bg-opacity-25 rounded-full transition-all duration-500 group-hover:w-full flex items-center">
                            <i class="fa fa-3x fa-github"></i>
                        </span>
                        <span class="ml-14 flex items-center">GitHub</span>
                    </button>
                </a>
            </div>
            <!-- right -->
            <div class="relative group w-[250px] h-[50px]">
                <a href="mailto:kimmy7526@gmail.com" class="w-full h-full">
                    <button class="flex items-center w-full h-full">
                        <span
                            class="absolute left-0 top-0 w-12 h-12 bg-black bg-opacity-25 rounded-full transition-all duration-500 group-hover:w-full flex items-center">
                            <i class="fa fa-3x fa-user-circle"></i>
                        </span>
                        <span class="ml-14 flex items-center">kimmy7526@gmail.com</span>
                    </button>
                </a>
            </div>
        </div>
        <hr class="my-5">
        <div class="footer text-center">&copy;僅供練習使用 非商業營利網站</div>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
@import 'font-awesome/css/font-awesome.min.css';
</style>