<template>
  <div class="app-container" :class="`theme-${themeStore.currentTheme}`">
    <Header class="header" :class="{ headerHidden: isHeaderHidden }"></Header>
    <RouterView
      class="router-view"
      :class="{ headerHidden: isHeaderHidden }"
    ></RouterView>
    <Footer></Footer>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { RouterView } from 'vue-router';
import { ref, onBeforeUnmount } from 'vue';
import { useThemeStore } from './stores/theme';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

const themeStore = useThemeStore();

const isHeaderHidden = ref(false);
let lastScroll = 0;

const handleScroll = () => {
  const currentScroll = window.scrollY;

  if (currentScroll > lastScroll && currentScroll > 40) {
    isHeaderHidden.value = true;
  } else if (currentScroll < lastScroll || currentScroll < 40) {
    isHeaderHidden.value = false;
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
@use '@/global.scss' as *;

.header {
  height: 60px;
  width: 100%;
  position: fixed;
  transition: transform 0.3s ease;
  z-index: 100;
  top: 0;
  left: 0;

  @include minimize {
    height: 100px;
  }
}
.header.headerHidden {
  transform: translateY(-100%);
}

.router-view {
  background-color: brown;
  padding-top: 60px;
  transition: padding 0.3s ease;

  @include minimize {
    padding-top: 100px;
    background-color: beige;
  }
}
</style>
