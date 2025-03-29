<template>
    <header class="fixed w-full h-20 bg-black/75 text-white backdrop-blur-md">
        <div class="flex items-center justify-between px-4 h-full">
            <div class="">
                <span>Kimmy🎉</span>
            </div>

            <div class="flex-1 flex justify-center">
                <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" :ellipsis="false">
                    <el-menu-item index="/">
                        首頁
                    </el-menu-item>
                    <el-menu-item index="/experience">
                        經驗
                    </el-menu-item>
                </el-menu>
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import router from '../router/index';

const activeIndex = ref<string>('/');

const handleSelect = (key: string) => {
    console.log('key',key)
    router.push(key);
};
</script>

<style scoped>
.el-menu {
    background-color: transparent !important;
    border-bottom: none !important;
}

.el-menu-item {
    color: white !important;
}

.el-menu-item:hover {
    color: rgb(104, 28, 255) !important;
    background-color: transparent !important;
}

.el-menu-item.is-active {
    color: #ffffff !important;
    border-bottom-color: transparent !important;
    background-color: transparent !important;
}

.el-menu-item:focus {
    background-color: transparent !important;
    outline: none !important;
}

.el-menu-item:active {
    background-color: transparent !important;
}
</style>