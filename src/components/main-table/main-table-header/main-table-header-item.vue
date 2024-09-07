<script setup lang="ts">
  withDefaults(
    defineProps<{
      canSort?: boolean;
      canQuestion?: boolean;
    }>(),
    { canSort: true, canQuestion: true }
  );

  defineSlots<{
    default: () => any;
  }>();
</script>

<template>
  <div class="item">
    <div class="item__name">
      <slot />
    </div>
    <div v-if="canSort || canQuestion" class="item__icons">
      <button v-if="canSort" class="item__sorting-icon">
        <svg width="20" height="20">
          <use xlink:href="#sorting"></use>
        </svg>
      </button>
      <button v-if="canQuestion" class="item__question-icon">
        <svg width="20" height="20">
          <use xlink:href="#question"></use>
        </svg>
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .item {
    @apply grid grid-flow-col justify-start gap-[8px] items-center;
    &__icons {
      @apply grid grid-flow-col justify-start gap-[4px] items-center;
    }
    // .item__name
    &__name {
      @apply text-white leading-[18px];
      font-size: 13px;
    }
    // .item__sorting-icon
    &__sorting-icon {
    }
    // .item__question-icon
    &__question-icon {
    }
  }
</style>
