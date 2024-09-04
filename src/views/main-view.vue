<script setup lang="ts"></script>

<template>
  <div class="main-page">
    <header class="main-page__header main-page-header">
      <h1 class="main-page-header__title">Мой склад</h1>
      <button class="main-page-header__button">
        <svg width="16" height="16" class="main-page-header__icon">
          <use xlink:href="#settings"></use>
        </svg>
        <span>Настройки отчёта</span>
      </button>
    </header>
    <main class="main-page__body main-page-body">
      <h2 class="main-page-body__title">Товары: <span>134 шт.</span></h2>
      <table class="main-page-body__table"></table>
    </main>
  </div>
</template>

<style scoped lang="scss">
  .main-page {
    @apply grid gap-[24px] grid-rows-[auto,1fr] min-h-full;
    // .main-page__header
    &__header {
    }
    // .main-page__body
    &__body {
    }
  }
  .main-page-header {
    @apply grid grid-cols-[1fr,auto] items-center gap-[10px];
    // .main-page-header__title
    &__title {
      @apply overflow-hidden text-ellipsis whitespace-nowrap text-[--black] leading-[36px] font-semibold;
      font-size: 30px;
    }
    // .main-page-header__button
    &__button {
      @apply px-[16px] pb-[8px] pt-[8px] rounded-[4px] border-solid border-[1px] border-[--blue-light] grid grid-flow-col justify-start items-center gap-[4px];

      & > span {
        @apply text-[--black] leading-[20px] inline-block mt-[3px] font-semibold;
        font-size: 14px;
      }
    }
    // .main-page-header__icon
    &__icon {
      @apply text-[--blue];
    }
  }
  .main-page-body {
    @apply p-[30px] rounded-[8px] bg-white;
    // .main-page-body__title
    &__title {
      @apply text-[--black] font-semibold leading-[24px];
      font-size: 18px;

      & > span {
        @apply text-[--pink];
      }
    }
    // .main-page-body__table
    &__table {
    }
  }
</style>
