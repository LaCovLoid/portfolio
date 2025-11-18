import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useThemeStore = defineStore('theme', () => {
  const currentTheme = ref<'light' | 'dark'>('light');

  const loadTheme = () => {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme == 'dark' || savedTheme == 'light') {
      currentTheme.value = savedTheme;
    }
  };

  const inverseTheme = () => {
    //null일경우까지 함께 처리
    currentTheme.value = currentTheme.value == 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', currentTheme.value);
  };

  loadTheme();

  return { currentTheme, inverseTheme };
});
