<script setup lang="ts">
  defineSlots<{
    icon: () => any;
  }>();

  defineProps<{
    label: string;
    to: string;
  }>();
</script>

<template>
  <router-link :to="to" class="item">
    <div class="item__icon">
      <slot name="icon" />
    </div>
    <div class="item__label">{{ label }}</div>
  </router-link>
</template>

<style scoped lang="scss">
  .item {
    @apply grid grid-flow-col gap-[16px] items-center py-[12px] px-[24px] justify-start cursor-pointer;
    // .item__icon
    &__icon {
      @apply text-[--gray];
    }
    // .item__label
    &__label {
      @apply text-white font-extrabold;
    }
  }
</style>
