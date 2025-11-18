<template>
  <div class="home-container">
    <div class="temp">내용</div>
    <div class="temp temp2">내용2</div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('slide');
        observer.unobserve(entry.target);
      }
    });
  });

  document.querySelectorAll('.temp').forEach(el => observer.observe(el));
});
</script>

<style lang="scss" scoped>
.home-container {
  .temp {
    opacity: 0;
    transform: translateX(40px);
    transition:
      opacity 0.6s ease-out,
      transform 0.6s ease-out;
  }

  .temp.slide {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
