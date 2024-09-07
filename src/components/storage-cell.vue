<script setup lang="ts">
  defineSlots<{
    default: () => any;
  }>();

  defineProps<{
    days: number;
  }>();
</script>

<template>
  <div class="storage-cell">
    <div class="storage-cell__top">
      <slot />
    </div>
    <div class="storage-cell__has">Хватит на {{ days }} дн</div>
  </div>
</template>

<style scoped lang="scss">
  .storage-cell {
    @apply grid gap-[4px] justify-start;
    // .storage-cell__top
    &__top {
      @apply mb-[2px];
    }
    // .storage-cell__has
    &__has {
      @apply text-[--brown] bg-[--gray-light-more] leading-[16px] px-[16px] py-[5px] text-center rounded-[4px];
      font-size: 12px;
    }
  }
</style>
