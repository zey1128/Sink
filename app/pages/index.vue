<script setup lang="ts">
// --- 自动切换到科技感 (暗黑) 模式 ---
// 这会告诉 Nuxt 优先使用暗黑模式
useColorMode().preference = 'dark'
</script>

<template>
  <main class="tech-bg flex flex-col min-h-[80vh] items-center justify-center p-8 overflow-hidden">
    
    <div class="flex items-center space-x-4 mb-8 logo-breath">
      <span class="flex items-center justify-center w-16 h-16 rounded-full">
        <img src="/sink.png" alt="Sink" class="w-full h-full rounded-full">
      </span>
      <h1 class="text-5xl font-black text-gray-100">
        Sink
      </h1>
    </div>

    <p class="text-lg text-slate-400 mb-12">
      A Simple / Speedy / Secure Link Shortener.
    </p>

    <NuxtLink 
      href="/dashboard" 
      title="Sink Dashboard" 
      class="glow-button rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200 px-8 py-3 text-lg font-medium flex items-center justify-center gap-2"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-layout-dashboard w-5 h-5">
        <rect width="7" height="9" x="3" y="3" rx="1"></rect>
        <rect width="7" height="5" x="14" y="3" rx="1"></rect>
        <rect width="7" height="9" x="14" y="12" rx="1"></rect>
        <rect width="7" height="5" x="3" y="16" rx="1"></rect>
      </svg>
      <span>Go to Dashboard</span>
    </NuxtLink>

    <NuxtLink 
      href="https://github.com/ccbikai/sink" 
      target="_blank" 
      title="Github" 
      class="inline-flex items-center text-sm font-medium leading-4 text-gray-400 hover:text-white focus:outline-none mt-8 transition"
    >
      <svg width="24px" height="24px" role="img" viewBox="0 0 24 24" class="w-5 h-5 mr-2" fill="currentColor">
        <title>GitHub</title>
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
      </svg>
      View on GitHub
    </NuxtLink>
  </main>
</template>

<style scoped>
/* 科技感背景: 深邃的径向渐变，而不是纯黑 */
.tech-bg {
  background: radial-gradient(ellipse at bottom, #0d1a2f 0%, #0c111c 100%);
  color: #e5e7eb; /* 确保文字在深色背景上可读 */
}

/* Logo 呼吸动画: 增加微妙的动感 */
.logo-breath {
  animation: breath 4s infinite alternate ease-in-out;
}

@keyframes breath {
  from {
    transform: scale(1);
    opacity: 0.8;
  }
  to {
    transform: scale(1.05);
    opacity: 1;
  }
}

/* Dashboard 按钮发光动画: 
   使其成为页面的视觉焦点 
*/
.glow-button {
  /* 基础样式 (来自 Tailwind: bg-white text-black) */
  background-color: #ffffff;
  color: #000000;
  
  /* 发光效果 */
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.3), 0 0 20px rgba(255, 255, 255, 0.2);
  animation: pulse-glow 3s infinite alternate;
}

.glow-button:hover {
  background-color: #e5e7eb; /* 对应 hover:bg-gray-200 */
}

@keyframes pulse-glow {
  from {
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.3), 0 0 20px rgba(255, 255, 255, 0.2);
  }
  to {
    /* 增强辉光效果 */
    box-shadow: 0 0 25px rgba(255, 255, 255, 0.7), 0 0 40px rgba(255, 255, 255, 0.5);
  }
}
</style>
