// stores/theme.ts (예시)
import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useThemeStore = defineStore('theme', () => {
  // 1. 상태: 테마 이름을 저장
  const currentTheme = ref<'light' | 'dark'>('light');

  // 2. 액션: 테마를 토글하는 함수
  const toggleTheme = () => {
    currentTheme.value = currentTheme.value === 'light' ? 'dark' : 'light';
    // 로컬 스토리지에 저장하여 페이지 새로고침 시에도 유지 (선택 사항)
    localStorage.setItem('theme', currentTheme.value);
  };

  // 3. Computed: 현재 상태가 다크인지 확인
  const isDark = computed(() => currentTheme.value === 'dark');

  // 초기 로드 시 로컬 스토리지에서 값 불러오기
  const loadTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || savedTheme === 'light') {
      currentTheme.value = savedTheme;
    }
  };
  loadTheme(); // Store가 생성될 때 실행

  return { currentTheme, isDark, toggleTheme };
});
