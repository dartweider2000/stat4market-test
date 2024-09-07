<script setup lang="ts">
  import MainTableHeaderItem from "@/components/main-table/main-table-header/main-table-header-item.vue";
</script>

<template>
  <thead class="table-header">
    <tr class="table-header__row">
      <th class="table-header__product">
        <div class="table-header__inner">Продукт</div>
      </th>
      <th class="table-header__wb-rest">
        <div class="table-header__inner">
          <main-table-header-item>Остаток на WB</main-table-header-item>
          <main-table-header-item :can-question="false"
            >Хватит на складе</main-table-header-item
          >
        </div>
      </th>
      <th class="table-header__provider-rest">
        <div class="table-header__inner">
          <main-table-header-item>Остаток у поставщика</main-table-header-item>
          <main-table-header-item :can-question="false"
            >Хватит на складе</main-table-header-item
          >
        </div>
      </th>
      <th class="table-header__my-rest">
        <div class="table-header__inner">
          <main-table-header-item>Остаток мой склад</main-table-header-item>
          <main-table-header-item :can-question="false"
            >Хватит на складе</main-table-header-item
          >
        </div>
      </th>
      <th class="table-header__all-rest">
        <div class="table-header__inner">
          <main-table-header-item :can-question="false"
            >Остаток всего</main-table-header-item
          >
          <main-table-header-item :can-question="false"
            >Хватит на складе</main-table-header-item
          >
        </div>
      </th>
      <th class="table-header__in-road">
        <div class="table-header__inner">
          <main-table-header-item
            >В пути от производителя</main-table-header-item
          >
        </div>
      </th>
      <th class="table-header__order-speed">
        <div class="table-header__inner">
          <main-table-header-item :can-question="false"
            >Скорость заказов</main-table-header-item
          >
          <main-table-header-item :can-sort="false"
            >за 7 дней</main-table-header-item
          >
        </div>
      </th>
      <th class="table-header__change-history">
        <div class="table-header__inner">
          <main-table-header-item :can-sort="false" :can-question="false"
            >История изменения</main-table-header-item
          >
        </div>
      </th>
    </tr>
  </thead>
</template>

<style scoped lang="scss">
  .table-header {
    @apply bg-[--blue] px-[20px] py-[7px] w-full;

    &__row {
      @apply w-full;

      & > * {
        @apply py-[7px] px-[8px];

        &:first-child {
          @apply pl-[20px];
        }

        &:last-child {
          @apply pr-[20px];
        }
      }
    }

    &__inner {
      @apply grid gap-[4px] whitespace-nowrap;
    }

    // .table-header__product
    &__product {
      @apply text-white leading-[18px] rounded-l-[4px];
      font-size: 13px;
    }
    // .table-header__wb-rest
    &__wb-rest {
      // @apply min-w-[150px];
    }
    // .table-header__provider-rest
    &__provider-rest {
      // @apply min-w-[195px];
    }
    // .table-header__my-rest
    &__my-rest {
      // @apply min-w-[175px];
    }
    // .table-header__all-rest
    &__all-rest {
      // @apply min-w-[140px];
    }
    // .table-header__in-road
    &__in-road {
      // @apply min-w-[150px];
    }
    // .table-header__order-speed
    &__order-speed {
      // @apply min-w-[155px];
    }
    // .table-header__change-history
    &__change-history {
      @apply rounded-r-[4px];
    }
  }
</style>
