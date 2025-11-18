<template>
  <div class="header-container">
    <span>Portfolio</span>
    <span :onclick="themeClicked">{{ theme }} Mod</span>
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
  if (theme.value === 'light') {
    theme.value = 'dark';
  } else {
    theme.value = 'light';
  }

  themeStore.inverseTheme();
};
</script>

<style lang="scss" scoped>
.header-container {
  padding-left: 20px;
  padding-right: 20px;

  display: flex;
  align-items: center;

  background-color: #ffffff;
}
</style>
