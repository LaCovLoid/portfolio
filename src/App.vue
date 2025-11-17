<template>
  <Header class="header"></Header>
  <RouterView class="router-view"></RouterView>
  <Footer></Footer>
</template>

<script setup lang="ts">
import { computed, onMounted, watch } from 'vue';
import { RouterView, useRoute } from 'vue-router';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

const route = useRoute();
const checkRoute = computed(() => route.path);

const scrollToTop = () => window.scrollTo(0, 0);

onMounted(() => {
  watch(checkRoute, scrollToTop);
});
</script>

<style lang="scss" scoped>
@use '@/global.scss' as *;

.header {
  height: 60px;

  @include minimize {
    height: 100px;
    background-color: aqua;
  }
}

.router-view {
  margin-top: 60px;
  background-color: brown;

  @include minimize {
    margin-top: 100px;
    background-color: beige;
  }
}
</style>
