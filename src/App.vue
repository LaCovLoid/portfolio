<template>
  <Header class="header" :class="{ headerHidden: isHeaderHidden }"></Header>
  <RouterView
    class="router-view"
    :class="{ headerHidden: isHeaderHidden }"
  ></RouterView>
  <Footer></Footer>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { RouterView } from 'vue-router';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

import { ref, onBeforeUnmount } from 'vue';

const isHeaderHidden = ref(false);
let lastScroll = 0;

const handleScroll = () => {
  const currentScroll = window.scrollY;

  // 아래로 스크롤할 때 (스크롤 위치가 0이 아닐 때) -> 헤더 숨김
  // *현재 lastScroll = 0 일 때 currentScroll이 10이 되면 바로 숨겨집니다.
  if (currentScroll > lastScroll && currentScroll > 10) {
    isHeaderHidden.value = true;
  }
  // 위로 스크롤할 때 (스크롤 방향이 위) OR 스크롤 위치가 맨 위(10px 미만)일 때 -> 헤더 표시
  else if (currentScroll < lastScroll || currentScroll < 10) {
    isHeaderHidden.value = false;
  }

  // 이 로직은 문제가 없습니다.
  // 다만, 스크롤을 아래로 내리다가 11px에서 헤더가 사라지고, 다시 위로 스크롤하면 나타납니다.
  // 10px 미만에서는 아래로 스크롤해도 사라지지 않는 '특정 동작'이 원하는 것이 아니라면,
  // isHeaderHidden.value = false; 로직을 '스크롤을 위로 올릴 때만'으로 제한하고,
  // '맨 위로 왔을 때' (currentScroll < 10) 로직은 따로 if 문으로 빼서 처리하는 방법도 고려할 수 있습니다.

  // **현재 코드가 이상하게 느껴지는 이유는 'currentScroll < 10'이 isHeaderHidden = false의 조건으로 들어갔기 때문입니다.**
  // 사용자의 의도를 최대한 존중하며, '스크롤을 조금만 내려도 사라지는' 동작을 위해
  // lastScroll이 0일 때의 특수한 상황을 제외하고는 아래로 스크롤할 때 바로 숨겨지게 하는 것이 일반적입니다.

  // **결론적으로, 현재 코드는 '스크롤을 아래로 내릴 때' 숨기고, '위로 올릴 때' 보이게 하는 로직 자체는 맞습니다.**
  // **다만, currentScroll > 10 조건 때문에 스크롤을 맨 위에서 10px 미만으로 내리면 숨겨지지 않고, 10px를 넘기는 순간 숨겨지는 '시작 지연'이 있는 것 뿐입니다.**
  // 이 시작 지연이 원하는 동작이 아니라면, 첫 번째 `if` 조건에서 `&& currentScroll > 10`을 제거하거나 더 작은 값으로 변경하시면 됩니다.

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
  background-color: #333;
  color: white;

  @include minimize {
    height: 100px;
    background-color: aqua;
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

  &.headerHidden {
  }
}
</style>
