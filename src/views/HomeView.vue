<template>
  <div class="home-container">
    <div class="produce">
      <div class="name">황순현</div>
      <div class="language">사용 언어:</div>
      <div class="language-list">
        <span class="vue">vue3</span>
        (HTML, TypeScript, scss)
      </div>
      <div class="possible-list">node.js</div>
      <div class="possible-list">MySQL</div>
      <div class="email">email: tnsgus290018@gmail.com</div>
      <div class="github">
        github:
        <a href="https://github.com/LaCovLoid">https://github.com/LaCovLoid</a>
      </div>
    </div>

    <div class="project">
      <div class="carousel">
        <div>a</div>
        <div>b</div>
        <div>c</div>
      </div>
    </div>

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
@use '@/global.scss' as *;

.home-container {
  background-color: var(--color-background);
  color: var(--color-text);

  text-align: flex;

  > .produce {
    padding-top: 40px;
    padding-left: 40px;
    text-align: left;
    .name {
      font-size: 32px;
      font-weight: bold;
    }

    .language {
      margin-top: 10px;
      font-size: 20px;
      font-weight: bold;
    }
    .vue {
      font-weight: bold;
      font-size: 24px;
    }
    .language-list {
      margin-left: 20px;
      margin-top: 5px;
      font-size: 18px;
    }
    .email {
      margin-top: 10px;
      font-size: 18px;
    }
    .github {
      margin-top: 5px;
      font-size: 18px;

      > a {
        color: var(--color-link);
        text-decoration: none;
        font-weight: bold;
      }
    }
  }
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
