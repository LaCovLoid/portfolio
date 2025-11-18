<template>
  <div class="header-container">
    <span>Portfolio</span>
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
  height: 60px;
  width: 100%;
  position: fixed;
  transition: transform 0.3s ease;
  z-index: 100;
  top: 0;
  left: 0;

  padding-left: 20px;
  padding-right: 20px;

  display: flex;
  align-items: center;

  font-weight: bold;
  font-size: 24px;

  color: var(--color-text);
  background-color: var(--color-header);

  @include minimize {
    height: 100px;
    font-size: 36px;
  }

  .bt-theme {
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 20px;
    padding-right: 20px;

    margin-left: auto;
    cursor: pointer;

    font-size: 18px;

    border: 3px solid var(--color-border);
    border-radius: 30px;

    -ms-user-select: none;
    -moz-user-select: -moz-none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    user-select: none;

    @include minimize {
      font-size: 20px;
    }

    > .bt-theme-toggle {
      display: block;
      width: 20px;
      height: 20px;
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
