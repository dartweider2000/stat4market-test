<script setup lang="ts">
  defineSlots<{
    icon: () => any;
  }>();

  defineProps<{
    to: string;
  }>();
</script>

<template>
  <router-link :to="to" class="social">
    <slot name="icon" />
  </router-link>
</template>

<style scoped lang="scss">
  .social {
    @apply flex justify-center items-center w-[32px] h-[32px] rounded-full border-[1px] border-solid border-[--gray] border-opacity-20 cursor-pointer;
  }
</style>
