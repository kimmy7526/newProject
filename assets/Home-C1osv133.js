import{r as l,o as k,a as S,c as j,b as e,d as w,n as o,e as t,f as V,w as C,F as _,g as T,h as B}from"./index-CvQ4tvKA.js";const M="/vue3-project/images/myself.jpg",P={class:"mb-24"},R={class:"mb-24"},E={class:"mb-24 overflow-hidden"},H={class:"flex justify-center"},z={__name:"Home",setup(L){const r=l(null),d=l(null),c=l(null),b=l(!1),u=l(!1),p=l(!1),v=l(!1);let n=0;function y(a,s){let i=null;return function(...h){clearTimeout(i),i=setTimeout(()=>{a.apply(this,h)},s)}}const f=()=>{if(!r.value||u.value)return;r.value.getBoundingClientRect().top<=n&&(u.value=!0)},m=()=>{if(!d.value||p.value)return;d.value.getBoundingClientRect().top<=n&&(p.value=!0)},x=()=>{if(!c.value||v.value)return;c.value.getBoundingClientRect().top<=n&&(v.value=!0)},g=y(()=>{f(),m(),x()},500);return k(()=>{setTimeout(()=>{b.value=!0},500),window.addEventListener("scroll",g),n=window.innerHeight*(2/3),f(),m(),x()}),S(()=>{window.removeEventListener("scroll",g)}),(a,s)=>{const i=T("router-link");return B(),j(_,null,[e("div",{class:o(["h-screen p-20 pt-0 md:pt-20 flex flex-col justify-around",["opacity-0 transition-all duration-1000",b.value?"opacity-100":""]])},s[0]||(s[0]=[w('<div class="flex flex-col md:flex-row justify-between items-center"><div class="text-center mb-16 md:mb-0 md:text-left"><p>Hi～</p><h2>I&#39;m Kimmy</h2><p class="text-text-subtle text-2xl">Frontend Developer</p></div><div class="relative w-96 h-80 flex justify-center items-center"><div class="absolute inset-0 w-full h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-50 z-0 animate-spin-slow"></div><img src="'+M+'" class="w-80 h-80 object-cover rounded-full z-10" style="box-shadow:0 0 30px black;"></div></div><div class="mx-auto"><div class="arrow"></div></div>',2)]),2),e("div",P,[s[2]||(s[2]=e("h2",{class:"text-center mb-8"},"關於我",-1)),e("div",{ref_key:"aboutMe",ref:r,class:o(["flex flex-col justify-center items-center",["opacity-0 transition-all duration-1000",u.value?"opacity-100":""]])},s[1]||(s[1]=[e("div",{class:"md:w-1/2 mb-8 px-8"},[t(" 【學習經歷】"),e("br"),t(" 大學時期，我主修程式語言（Java），也考到原廠Oracle的證照。"),e("br"),t(" 後來在修資工的課上接觸到前端開發，當時的期末專案需要手刻一個簡易網站，短短幾周內，組員們互相腦力激盪，最終完成了一個雛形。雖然功能不如預期完整，但在這個過程中，我發現自己對前端開發更有熱情，從此開始自學前端，也在大四的時候進入業界實習。"),e("br")],-1),e("div",{class:"md:w-1/2 mb-8 px-8"},[t(" 【工作經歷】"),e("br"),t(" 擁有兩年多的前端開發經驗，曾在新創公司參與產品開發，除了撰寫程式之外，也會負責規劃系統流程、整合各方需求與回饋，致力於解決使用者痛點，打造更流暢直覺的 UX 體驗。"),e("br")],-1),e("div",{class:"md:w-1/2 mb-8 px-8"},[t(" 【程式之外，展現合作與溝通能力】"),e("br"),t(" 大二時期，我擔任運動社團的活動企劃與社群小編，無論是社內比賽與團康，或是多校聯合迎新，我都樂於投入其中，從構思到執行全程參與。我擅長在討論中傾聽並收集團隊意見，適時提出建議，並以積極負責的態度完成每項任務。"),e("br")],-1)]),2)]),e("div",R,[s[4]||(s[4]=e("h2",{class:"text-center mb-8"},"專長",-1)),e("div",{ref_key:"skills",ref:d,class:o(["w-1/2",["opacity-0 transition-all duration-700",p.value?"opacity-100 translate-x-1/2":""]])},s[3]||(s[3]=[w('<div class="rounded bg-white/20 mb-4 p-4 hover:scale-105 transition-all duration-300"><p class="pb-4 ps-4">前端</p><div class="flex flex-wrap"><span class="badge">HTML5</span><span class="badge">CSS3</span><span class="badge">Vue3.js</span><span class="badge">JavaScript</span><span class="badge">TypeScript</span><span class="badge">Bootstrap5</span><span class="badge">Tailwind CSS</span></div></div><div class="rounded bg-white/20 mb-4 p-4 hover:scale-105 transition-all duration-300"><p class="pb-4 ps-4">後端</p><span class="badge">Java</span></div><div class="rounded bg-white/20 mb-4 p-4 hover:scale-105 transition-all duration-300"><p class="pb-4 ps-4">其他</p><div class="flex flex-wrap"><span class="badge">npm</span><span class="badge">Vite</span><span class="badge">Git</span></div></div>',3)]),2)]),e("div",E,[s[6]||(s[6]=e("h2",{class:"text-center"},"本站採用",-1)),e("div",{ref_key:"useSkills",ref:c,class:o(["w-1/2 mx-auto flex justify-center",["opacity-0 transition-all duration-700",v.value?"opacity-100 translate-x-0":"translate-x-full"]])},s[5]||(s[5]=[e("ul",{class:"leading-8 p-4"},[e("li",null,[t("✓　Vue.js : "),e("span",{class:"text-text-subtle"},"負責建構網站的互動介面")]),e("li",null,[t("✓　Vue Router : "),e("span",{class:"text-text-subtle"},"實現單頁式網站(SPA)的路由導航")]),e("li",null,"✓　Vite"),e("li",null,"✓　Tailwind CSS"),e("li",null,"✓　Element Plus")],-1)]),2)]),e("div",H,[V(i,{to:"/experience",class:"border-2 border-purple-500 bg-transparent hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 rounded-full font-bold py-4 px-8"},{default:C(()=>s[7]||(s[7]=[t(" 了解更多 ")])),_:1})])],64)}}};export{z as default};
