<template>
    <header class="fixed z-30 w-full h-20 bg-black/50 backdrop-blur-md text-text">
        <div class="flex items-center justify-between px-4 h-full">
            <div>
                <span>Kimmy🎉</span>
            </div>
            <!-- 電腦  -->
            <div class="hidden lg:flex">
                <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect"
                    :ellipsis="false">
                    <el-menu-item index="/" class="">
                        首頁
                    </el-menu-item>
                    <el-menu-item index="/experience" class="">
                        經歷
                    </el-menu-item>
                </el-menu>
            </div>
            <!-- 手機 -->
            <button class="lg:hidden pr-4" @click="toggleMenu">
                <i class="fa fa-bars text-3xl"></i>
            </button>
        </div>
    </header>

    <transition name="slide-fade">
        <div v-if="isMobileMenuOpen" class="fixed inset-0 z-50 flex">
            <!-- 遮罩區 -->
            <div class="w-2/3 h-full bg-black bg-opacity-50" @click="isMobileMenuOpen = false"></div>
            <!-- 選單區 -->
            <div class="w-1/3 h-full pt-20 bg-[#7a8ca6] relative">
                <button class="absolute top-4 right-4 text-[#353d48] text-2xl font-bold" @click="isMobileMenuOpen = false">
                    ✕
                </button>
                <el-menu :default-active="activeIndex" class="el-menu-demo custom-mobile-menu" :ellipsis="false" @select="handleSelect"
                    text-color="#fff">
                    <el-menu-item index="/" class="hover:shadow-lg transition-shadow duration-300">首頁</el-menu-item>
                    <el-menu-item index="/experience"
                        class="hover:shadow-lg transition-shadow duration-300">經歷</el-menu-item>
                </el-menu>
            </div>
        </div>
    </transition>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import router from '../router/index';

const activeIndex = ref<string>('/');
const isMobileMenuOpen = ref(false);

const handleSelect = (key: string) => {
    router.push(key);
    // 點選後自動關閉手機選單
    if (isMobileMenuOpen.value) {
        isMobileMenuOpen.value = false;
    }
};

const toggleMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value;
}

</script>

<style scoped>
@import 'font-awesome/css/font-awesome.min.css';

/* navbar 樣式 */
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

.custom-mobile-menu .el-menu-item:hover {
  background-color: transparent !important;
  color: inherit !important; /* 保持原色 */
}


/* 漢堡選單樣式 */
.slide-fade-enter-active {
    transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateX(20px);
    opacity: 0;
}
</style>