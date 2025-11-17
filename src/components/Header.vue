<template>
  <div class="header-container" :class="{ hidden: isHidden }">Header</div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

const isHidden = ref(false);
let lastScroll = 0;

const handleScroll = () => {
  const currentScroll = window.scrollY;

  if (currentScroll > lastScroll && currentScroll > 50) {
    // 아래로 스크롤 → 숨기기
    isHidden.value = true;
  } else {
    // 위로 스크롤 → 보이기
    isHidden.value = false;
  }

  lastScroll = currentScroll;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style lang="scss" scoped>
.header-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: #333;
  color: white;
  display: flex;
  align-items: center;
  padding: 0 20px;
  transition: transform 0.3s ease;
  z-index: 100;
}
.header-container.hidden {
  transform: translateY(-100%);
}
</style>
