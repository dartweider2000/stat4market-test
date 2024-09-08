<script setup lang="ts">
  import { onClickOutside, useResizeObserver } from "@vueuse/core";
  import { computed, onMounted, ref, toRefs, watch } from "vue";
  import CustomUnderline from "@/components/custom-underline.vue";

  const props = withDefaults(
    defineProps<{
      value: number;
      measure?: string;
      canInteractive?: boolean;
    }>(),
    { canInteractive: true, measure: "шт." }
  );
  const { value, canInteractive } = toRefs(props);

  const emit = defineEmits<{
    "change-value": [value: number];
  }>();

  const currentNumber = computed({
    get: () => value.value,
    set: (value: number) => emit("change-value", value || 0),
  });

  const isInteractiveMode = ref<boolean>(false);
  const localCopy = ref<number>(currentNumber.value);
  const isSaved = computed(() => localCopy.value === currentNumber.value);
  watch(currentNumber, (value) => {
    localCopy.value = value;
  });

  const inputEl = ref<HTMLInputElement | null>(null);
  const barEl = ref<HTMLElement | null>(null);
  const barElWidth = ref<number>(0);
  const barElWidthElHeight = computed(() => `${barElWidth.value + 20}px`);
  useResizeObserver(barEl, () => {
    barElWidth.value = barEl.value!.offsetWidth;
  });

  const openInteractiveMode = () => {
    if (canInteractive.value) isInteractiveMode.value = true;
  };

  const acceptButtonClickHandler = () => {
    currentNumber.value = localCopy.value;
  };

  const closeButtonClickHandler = () => {
    localCopy.value = currentNumber.value;
  };

  onMounted(() => {
    onClickOutside(inputEl, () => {
      if (!inputEl.value) return;

      isInteractiveMode.value = false;
    });
  });
</script>

<template>
  <div class="selection-number">
    <div v-if="!isInteractiveMode" class="selection-number__view view">
      <div
        ref="barEl"
        class="view__bar"
        :class="{ 'not-interactive': !canInteractive }"
        @click="openInteractiveMode"
      >
        <div class="view__number">{{ localCopy }}</div>
        <div v-if="isSaved" class="view__measure">{{ measure }}</div>
        <custom-underline v-if="canInteractive" class="view__decoration" />
      </div>
      <div v-if="!isSaved" class="view__confirm">
        <button class="view__accept" @click="acceptButtonClickHandler">
          <svg width="12" height="12">
            <use xlink:href="#check"></use>
          </svg>
        </button>
        <button class="view__close" @click="closeButtonClickHandler">
          <svg width="12" height="12">
            <use xlink:href="#close"></use>
          </svg>
        </button>
      </div>
    </div>
    <div v-else class="selection-number__interactive">
      <input ref="inputEl" v-model="localCopy" type="number" min="0" />
    </div>
  </div>
</template>

<style scoped lang="scss">
  .selection-number {
    // .selection-number__view
    &__view {
    }
    // .selection-number__interactive
    &__interactive {
      & > input {
        @apply outline-none max-w-[140px] text-[--black];
        width: v-bind("barElWidthElHeight");
        min-width: none;
      }
    }
  }
  .view {
    @apply grid grid-flow-col justify-start items-center gap-[8px];
    // .view__bar
    &__bar {
      @apply text-[--blue] leading-[20px] grid grid-flow-col items-center justify-start relative gap-[4px];

      &:not(.not-interactive) {
        @apply cursor-pointer;
      }

      &.not-interactive {
        @apply text-[--black];
      }
    }
    // .view__number
    &__number {
    }
    // .view__measure
    &__measure {
    }
    &__decoration {
      @apply absolute bottom-0 left-0 w-full;
    }
    // .view__confirm
    &__confirm {
      @apply grid grid-flow-col justify-start items-center gap-[4px];

      & > * {
        @apply p-[4px] rounded-[4px];
      }
    }
    // .view__accept
    &__accept {
      @apply text-white bg-[--blue];
    }
    // .view__close
    &__close {
      @apply text-[--blue] bg-white border-[1px] border-solid border-[--blue-light];
    }
  }
</style>
