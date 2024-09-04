<script setup lang="ts">
  import TheSidebar from "@/components/the-sidebar.vue";
  import SvgSprite from "@/components/svg-sprite.vue";
</script>

<template>
  <svg-sprite class="absolute left-[-9999999999px]" />
  <div class="app">
    <the-sidebar />
    <main class="app__main">
      <router-view />
    </main>
  </div>
</template>

<style scoped lang="scss">
  .app {
    @apply min-h-dvh overflow-x-hidden;
    // .app__main
    &__main {
      @apply ml-[--sidebar-width] p-[40px] bg-[--gray-light] min-h-dvh;
    }
  }
</style>
