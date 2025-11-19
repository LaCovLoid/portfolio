<template>
  <div class="header-container">
    <span class="title">Portfolio</span>
    <span class="bt-theme" :onclick="themeClicked">
      <span class="bt-theme-toggle"></span>
    </span>
    <span></span>
  </div>
</template>

<script setup lang="ts">
import { ref, type Ref } from 'vue';
import { useThemeStore } from '../stores/theme';
const themeStore = useThemeStore();

var theme: Ref<string> = ref('light');
theme.value = themeStore.currentTheme;

const themeClicked = () => {
  if (theme.value == 'light') {
    theme.value = 'dark';
  } else {
    theme.value = 'light';
  }
  themeStore.inverseTheme();
};
</script>

<style lang="scss" scoped>
@use '@/global.scss' as *;

.header-container {
  width: 100vw;
  height: 60px;
  top: 0;
  left: 0;
  z-index: 100;

  padding-left: 20px;
  padding-right: 20px;

  display: flex;
  position: fixed;
  transition: transform 0.3s ease;

  align-items: center;
  background-color: var(--color-header);

  @include minimize {
    height: 100px;
    font-size: 36px;
  }

  > .title {
    font-size: 24px;
    font-weight: bold;
    color: var(--color-text);
  }

  > .bt-theme {
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 20px;
    padding-right: 20px;

    margin-left: auto;

    font-size: 18px;
    border: 3px solid var(--color-border);
    border-radius: 30px;

    cursor: pointer;
    user-select: none;
    -ms-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -moz-user-select: -moz-none;

    @include minimize {
      font-size: 20px;
    }

    > .bt-theme-toggle {
      width: 20px;
      height: 20px;

      display: block;

      border-radius: 50%;
      background-color: var(--color-text);
      transition: transform 0.3s ease;
      transform: translateX(var(--locate-toggle));

      margin-left: 2px;

      @include minimize {
        width: 20px;
        height: 20px;
      }
    }
  }
}
</style>
