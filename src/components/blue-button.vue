<script setup lang="ts">
  withDefaults(
    defineProps<{
      to?: string;
    }>(),
    { to: "/" }
  );

  defineSlots<{
    default: () => any;
  }>();
</script>

<template>
  <router-link :to="to" class="btn">
    <slot> Посмотреть </slot>
  </router-link>
</template>

<style scoped lang="scss">
  .btn {
    @apply px-[8px] py-[5px] text-center rounded-[4px] bg-[--blue] text-white leading-[16px];
    font-size: 12px;
  }
</style>
