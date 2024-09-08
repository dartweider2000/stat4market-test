<script setup lang="ts">
  import MainTableHeaderItem from "@/components/main-table/main-table-header/main-table-header-item.vue";
  import SelectionNumber from "@/components/selection-number.vue";

  const orderSpeedDays = defineModel<number>();
  const changeValueHandler = (value: number) => {
    orderSpeedDays.value = value;
  };
</script>

<template>
  <colgroup class="colgroup">
    <col name="1" class="colgroup__col colgroup__col_1" />
    <col name="2" class="colgroup__col colgroup__col_2" />
    <col name="3" class="colgroup__col colgroup__col_3" />
    <col name="4" class="colgroup__col colgroup__col_4" />
    <col name="5" class="colgroup__col colgroup__col_5" />
    <col name="6" class="colgroup__col colgroup__col_6" />
    <col name="7" class="colgroup__col colgroup__col_7" />
    <col name="8" class="colgroup__col colgroup__col_8" />
  </colgroup>
  <thead class="table-header">
    <tr class="table-header__row">
      <th class="table-header__data table-header__data_1">
        <div class="table-header__cell">Продукт</div>
      </th>
      <th class="table-header__data table-header__data_2">
        <div class="table-header__cell">
          <main-table-header-item>Остаток на WB</main-table-header-item>
          <main-table-header-item :can-question="false"
            >Хватит на складе</main-table-header-item
          >
        </div>
      </th>
      <th class="table-header__data table-header__data_3">
        <div class="table-header__cell">
          <main-table-header-item>Остаток у поставщика</main-table-header-item>
          <main-table-header-item :can-question="false"
            >Хватит на складе</main-table-header-item
          >
        </div>
      </th>
      <th class="table-header__data table-header__data_4">
        <div class="table-header__cell">
          <main-table-header-item>Остаток мой склад</main-table-header-item>
          <main-table-header-item :can-question="false"
            >Хватит на складе</main-table-header-item
          >
        </div>
      </th>
      <th class="table-header__data table-header__data_5">
        <div class="table-header__cell">
          <main-table-header-item :can-question="false"
            >Остаток всего</main-table-header-item
          >
          <main-table-header-item :can-question="false"
            >Хватит на складе</main-table-header-item
          >
        </div>
      </th>
      <th class="table-header__data table-header__data_6">
        <div class="table-header__cell">
          <main-table-header-item
            >В пути от производителя</main-table-header-item
          >
        </div>
      </th>
      <th class="table-header__data table-header__data_7">
        <div class="table-header__cell">
          <main-table-header-item :can-question="false"
            >Скорость заказов</main-table-header-item
          >
          <main-table-header-item class="days-selection" :can-sort="false">
            за
            <selection-number
              class="days-selection__item"
              measure="дней"
              :value="orderSpeedDays!"
              @change-value="changeValueHandler"
            />
          </main-table-header-item>
        </div>
      </th>
      <th class="table-header__data table-header__data_8">
        <div class="table-header__cell">
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

    &__cell {
      @apply grid gap-[4px] whitespace-nowrap text-left;
    }

    &__data {
      @apply leading-[18px];
      font-size: 13px;
      &_1 {
        @apply rounded-l-[4px] text-white;
      }
      &_2 {
      }
      &_3 {
      }
      &_4 {
      }
      &_5 {
      }
      &_6 {
        & > * {
          @apply whitespace-normal;
        }
      }
      &_7 {
      }
      &_8 {
        @apply rounded-r-[4px];

        & > * {
          @apply whitespace-normal;
        }
      }
    }
  }

  .days-selection {
    &:deep(.item__name) {
      @apply grid grid-flow-col gap-[4px] items-center justify-start;
    }

    &__item {
      @apply px-[4px] pb-[2px] bg-white rounded-[4px] leading-[18px];
      font-size: 13px;
    }
  }
</style>
