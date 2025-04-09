// 客製化整個 Tailwind 工具
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',  
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0f2c', // 深藍背景
        text: {
          DEFAULT: '#ffffff', // 主文字白
          subtle: '#b3b3b3',  // 次要文字灰
        },
      },
    },
  },
  plugins: [],
};

  