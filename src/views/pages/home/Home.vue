<template>
    <!-- cover -->
    <div class="h-screen p-20 pt-0 md:pt-20 flex flex-col justify-around"
        :class="['opacity-0 transition-all duration-1000', isVisible ? 'opacity-100' : '']">
        <div class="flex flex-col md:flex-row justify-between items-center">
            <!-- left -->
            <div class="text-center mb-16 md:mb-0 md:text-left">
                <p>Hi～</p>
                <h2>I'm Kimmy</h2>
                <p class="text-text-subtle text-2xl">Frontend Developer</p>
            </div>
            <!-- right -->
            <div class="relative w-96 h-80 flex justify-center items-center">
                <!-- 特效 -->
                <div class="absolute inset-0 w-full h-full rounded-full 
                bg-gradient-to-r from-blue-500 to-purple-500 opacity-50 z-0 animate-spin-slow"></div>
                <!-- 照片 -->
                <img src="/images/myself.jpg" class="w-80 h-80 object-cover rounded-full z-10"
                    style="box-shadow: 0 0 30px black;" />
            </div>
        </div>
        <!-- arrow -->
        <div class="mx-auto">
            <div class="arrow"></div>
        </div>
    </div>



    <!-- about me -->
    <div class="mb-24">
        <h2 class="text-center mb-8">關於我</h2>
        <div ref="aboutMe" class="flex flex-col justify-center items-center"
            :class="['opacity-0 transition-all duration-1000', isVisibleOfAboutMe ? 'opacity-100' : '']">
            <!-- <h4 class="w-1/2 text-center mb-8">嗨，我叫 Kimmy，今年24歲，資訊管理學系畢業。</h4> -->
            <!-- 
          <div>
            個性、價值觀
         </div>-->
            <div class="md:w-1/2 mb-8 px-8">
                【學習經歷】<br>
                大學時期，我主修程式語言（Java），也考到原廠Oracle的證照。<br>
                後來在修資工的課上接觸到前端開發，當時的期末專案需要手刻一個簡易網站，短短幾周內，組員們互相腦力激盪，最終完成了一個雛形。雖然功能不如預期完整，但在這個過程中，我發現自己對前端開發更有熱情，從此開始自學前端，也在大四的時候進入業界實習。<br>
            </div>
            <div class="md:w-1/2 mb-8 px-8">
                【工作經歷】<br>
                擁有兩年多的前端開發經驗，曾在新創公司參與產品開發，除了撰寫程式之外，也會負責規劃系統流程、整合各方需求與回饋，致力於解決使用者痛點，打造更流暢直覺的 UX 體驗。<br>
            </div>
            <div class="md:w-1/2 mb-8 px-8">
                【程式之外，展現合作與溝通能力】<br>
                大二時期，我擔任運動社團的活動企劃與社群小編，無論是社內比賽與團康，或是多校聯合迎新，我都樂於投入其中，從構思到執行全程參與。我擅長在討論中傾聽並收集團隊意見，適時提出建議，並以積極負責的態度完成每項任務。<br>
            </div>

        </div>
    </div>



    <!-- skills -->
    <div class="mb-24">
        <h2 class="text-center mb-8">專長</h2>
        <div ref="skills" class="w-1/2"
            :class="['opacity-0 transition-all duration-700', isSlideRight ? 'opacity-100 translate-x-1/2' : '']">
            <div class="rounded bg-white/20 mb-4 p-4 hover:scale-105 transition-all duration-300">
                <p class="pb-4 ps-4">前端</p>
                <div class="flex flex-wrap">
                    <span class="badge">HTML5</span>
                    <span class="badge">CSS3</span>
                    <span class="badge">Vue3.js</span>
                    <span class="badge">JavaScript</span>
                    <span class="badge">TypeScript</span>
                    <span class="badge">Bootstrap5</span>
                    <span class="badge">Tailwind CSS</span>
                </div>
            </div>
            <div class="rounded bg-white/20 mb-4 p-4 hover:scale-105 transition-all duration-300">
                <p class="pb-4 ps-4">後端</p>
                <span class="badge">Java</span>
            </div>
            <div class="rounded bg-white/20 mb-4 p-4 hover:scale-105 transition-all duration-300">
                <p class="pb-4 ps-4">其他</p>
                <div class="flex flex-wrap">
                    <span class="badge">npm</span>
                    <span class="badge">Vite</span>
                    <span class="badge">Git</span>
                </div>
            </div>
        </div>
    </div>



    <!-- useSkills -->
    <div class="mb-24 overflow-hidden">
        <h2 class="text-center">本站採用</h2>
        <div ref="useSkills" class="w-1/2 mx-auto flex justify-center"
            :class="['opacity-0 transition-all duration-700', isSlideLeft ? 'opacity-100 translate-x-0' : 'translate-x-full']">
            <ul class="leading-8 p-4">
                <li>✓　Vue.js : <span class="text-text-subtle">負責建構網站的互動介面</span></li>
                <li>✓　Vue Router : <span class="text-text-subtle">實現單頁式網站(SPA)的路由導航</span></li>
                <li>✓　Vite</li>
                <li>✓　Tailwind CSS</li>
                <li>✓　Element Plus</li>
            </ul>
        </div>
    </div>


    <!-- btn -->
    <div class="flex justify-center">
        <router-link to="/experience" class="border-2 border-purple-500 bg-transparent 
         hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500
         rounded-full font-bold
         py-4 px-8">
            了解更多
        </router-link>
    </div>
</template>


<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const aboutMe = ref(null);
const skills = ref(null);
const useSkills = ref(null);

const isVisible = ref(false);
const isVisibleOfAboutMe = ref(false);
const isSlideRight = ref(false);
const isSlideLeft = ref(false);
let triggerPoint = 0;

function throttle(fn, delay) {
    let lastTime = 0;
    return function (...args) {
        const now = new Date().getTime();
        if (now - lastTime >= delay) {
            lastTime = now; // 更新
            fn.apply(this, args);
        }
    }
}

// 檢查 aboutMe 位置
const checkAboutMePosition = () => {
    if (!aboutMe.value || isVisibleOfAboutMe.value) return;

    // 元素的「頂部」距離視窗最上方的距離
    const rect = aboutMe.value.getBoundingClientRect();

    if (rect.top <= triggerPoint) {
        isVisibleOfAboutMe.value = true;
    }
};

// 檢查 skills 位置
const checkSkillsPosition = () => {
    if (!skills.value || isSlideRight.value) return;

    const rect = skills.value.getBoundingClientRect();

    if (rect.top <= triggerPoint) {
        isSlideRight.value = true;
    }
};

// 檢查 useSkills 位置
const checkUseSkillsPosition = () => {
    if (!useSkills.value || isSlideLeft.value) return;

    const rect = useSkills.value.getBoundingClientRect();

    if (rect.top <= triggerPoint) {
        isSlideLeft.value = true;
    }
};

const onScroll = throttle(() => {
    checkAboutMePosition();
    checkSkillsPosition();
    checkUseSkillsPosition();
}, 300);

onMounted(() => {
    setTimeout(() => {
        isVisible.value = true;
    }, 500);

    window.addEventListener('scroll', onScroll);
    triggerPoint = window.innerHeight * (2 / 3);

    checkAboutMePosition();
    checkSkillsPosition();
    checkUseSkillsPosition();
});

onUnmounted(() => {
    window.removeEventListener('scroll', onScroll);
})
</script>

<style>
@import 'font-awesome/css/font-awesome.min.css';

/* 光暈特效 */
@keyframes spin-slow {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}

.animate-spin-slow {
    animation: spin-slow 12s infinite linear;
}

/* 箭頭動畫 */
.arrow-container {
    display: flex;
    justify-content: center;
}

.arrow {
    width: 15px;
    height: 15px;
    border-right: 3px solid rgb(255, 255, 255);
    /*箭頭右側 */
    border-bottom: 3px solid rgb(255, 255, 255);
    /*箭頭左側 */
    animation: moveDown 1s infinite;
}

/* 動畫設置 */
@keyframes moveDown {
    0% {
        transform: translateY(0) rotate(45deg);
    }

    50% {
        transform: translateY(10px) rotate(45deg);
    }

    100% {
        transform: translateY(0) rotate(45deg);
    }
}
</style>