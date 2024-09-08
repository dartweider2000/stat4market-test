<script setup lang="ts">
  import MainTable from "@/components/main-table/main-table.vue";
  import type { IMainTableRow } from "@/types";
  import { ref } from "vue";

  const mainTable = ref<IMainTableRow[]>([
    {
      id: 1,
      product: {
        image: "/img/default-product.jpg",
        article: 9619790,
        name: "Долговечный букет из 9 роз в коробке, в подарок — вечные стабилизированные цветы,",
      },
      wbRest: { value: { canModify: true, rest: 55_475 }, days: 549 },
      providerRest: { value: { canModify: false, rest: 1_000 }, days: 549 },
      storageRest: { value: { canModify: true, rest: 11_453 }, days: 549 },
      allRest: { value: { canModify: false, rest: 142_412 }, days: 549 },
      inRoad: { canModify: true, rest: 453 },
      orderSpeed: { canModify: true, rest: 5 },
      viewTo: "/",
    },
    {
      id: 2,
      product: {
        image: "/img/default-product.jpg",
        article: 9619790,
        name: "Долговечный букет из 9 роз в коробке, в подарок — вечные стабилизированные цветы,",
      },
      wbRest: { value: { canModify: true, rest: 55_475 }, days: 549 },
      providerRest: { value: { canModify: false, rest: 1_000 }, days: 549 },
      storageRest: { value: { canModify: false, rest: 11_453 }, days: 549 },
      allRest: { value: { canModify: false, rest: 142_412 }, days: 549 },
      inRoad: { canModify: false, rest: 453 },
      viewTo: "/",
      orderSpeed: { canModify: true, rest: 5 },
      measureTable: [
        {
          id: 1,
          size: 38,
          wbRest: { value: { canModify: false, rest: 41 }, days: 2 },
          providedRest: { value: { canModify: false, rest: 41 }, days: 2 },
          storageRest: { value: { canModify: true, rest: 41 }, days: 2 },
          allRest: { value: { canModify: false, rest: 41 }, days: 2 },
          inRoad: { canModify: true, rest: 244 },
          orderSpeed: 5,
          viewTo: "/",
        },
        {
          id: 2,
          size: 42,
          wbRest: { value: { canModify: false, rest: 90 }, days: 4 },
          providedRest: { value: { canModify: false, rest: 90 }, days: 4 },
          storageRest: { value: { canModify: true, rest: 90 }, days: 4 },
          allRest: { value: { canModify: false, rest: 90 }, days: 4 },
          inRoad: { canModify: true, rest: 223 },
          orderSpeed: 5,
          viewTo: "/",
        },
        {
          id: 3,
          size: 46,
          wbRest: { value: { canModify: false, rest: 114 }, days: 5 },
          providedRest: { value: { canModify: false, rest: 114 }, days: 5 },
          storageRest: { value: { canModify: true, rest: 114 }, days: 5 },
          allRest: { value: { canModify: false, rest: 114 }, days: 5 },
          inRoad: { canModify: true, rest: 176 },
          orderSpeed: 5,
          viewTo: "/",
        },
        {
          id: 4,
          size: 38,
          wbRest: { value: { canModify: false, rest: 417 }, days: 10 },
          providedRest: { value: { canModify: false, rest: 417 }, days: 10 },
          storageRest: { value: { canModify: true, rest: 417 }, days: 10 },
          allRest: { value: { canModify: false, rest: 417 }, days: 10 },
          inRoad: { canModify: true, rest: 139 },
          orderSpeed: 5,
          viewTo: "/",
        },
        {
          id: 5,
          size: 40,
          wbRest: { value: { canModify: false, rest: 490 }, days: 13 },
          providedRest: { value: { canModify: false, rest: 490 }, days: 13 },
          storageRest: { value: { canModify: true, rest: 490 }, days: 13 },
          allRest: { value: { canModify: false, rest: 490 }, days: 13 },
          inRoad: { canModify: true, rest: 24 },
          orderSpeed: 5,
          viewTo: "/",
        },
      ],
    },
    {
      id: 3,
      product: {
        image: "/img/default-product.jpg",
        article: 9619790,
        name: "Долговечный букет из 9 роз в коробке, в подарок — вечные стабилизированные цветы,",
      },
      wbRest: { value: { canModify: true, rest: 55_475 }, days: 549 },
      providerRest: { value: { canModify: false, rest: 1_000 }, days: 549 },
      storageRest: { value: { canModify: true, rest: 11_453 }, days: 549 },
      allRest: { value: { canModify: false, rest: 142_412 }, days: 549 },
      inRoad: { canModify: true, rest: 453 },
      orderSpeed: { canModify: true, rest: 5 },
      viewTo: "/",
      measureTable: [
        {
          id: 6,
          size: 38,
          wbRest: { value: { canModify: false, rest: 41 }, days: 2 },
          providedRest: { value: { canModify: false, rest: 41 }, days: 2 },
          storageRest: { value: { canModify: true, rest: 41 }, days: 2 },
          allRest: { value: { canModify: false, rest: 41 }, days: 2 },
          inRoad: { canModify: true, rest: 244 },
          orderSpeed: 5,
          viewTo: "/",
        },
        {
          id: 7,
          size: 42,
          wbRest: { value: { canModify: false, rest: 90 }, days: 4 },
          providedRest: { value: { canModify: false, rest: 90 }, days: 4 },
          storageRest: { value: { canModify: true, rest: 90 }, days: 4 },
          allRest: { value: { canModify: false, rest: 90 }, days: 4 },
          inRoad: { canModify: true, rest: 223 },
          orderSpeed: 5,
          viewTo: "/",
        },
        {
          id: 8,
          size: 46,
          wbRest: { value: { canModify: false, rest: 114 }, days: 5 },
          providedRest: { value: { canModify: false, rest: 114 }, days: 5 },
          storageRest: { value: { canModify: true, rest: 114 }, days: 5 },
          allRest: { value: { canModify: false, rest: 114 }, days: 5 },
          inRoad: { canModify: true, rest: 176 },
          orderSpeed: 5,
          viewTo: "/",
        },
        {
          id: 9,
          size: 38,
          wbRest: { value: { canModify: false, rest: 417 }, days: 10 },
          providedRest: { value: { canModify: false, rest: 417 }, days: 10 },
          storageRest: { value: { canModify: true, rest: 417 }, days: 10 },
          allRest: { value: { canModify: false, rest: 417 }, days: 10 },
          inRoad: { canModify: true, rest: 139 },
          orderSpeed: 5,
          viewTo: "/",
        },
        {
          id: 10,
          size: 40,
          wbRest: { value: { canModify: false, rest: 490 }, days: 13 },
          providedRest: { value: { canModify: false, rest: 490 }, days: 13 },
          storageRest: { value: { canModify: true, rest: 490 }, days: 13 },
          allRest: { value: { canModify: false, rest: 490 }, days: 13 },
          inRoad: { canModify: true, rest: 24 },
          orderSpeed: 5,
          viewTo: "/",
        },
      ],
    },
  ]);

  const changeMainTableWbRestHandler = (rowId: number, value: number) => {
    const row = mainTable.value.find(({ id }) => id === rowId);

    if (row) {
      row.wbRest.value.rest = value;
    }
  };

  const changeMainTableInRoadHandler = (rowId: number, value: number) => {
    const row = mainTable.value.find(({ id }) => id === rowId);

    if (row) {
      row.inRoad.rest = value;
    }
  };

  const changeMainTableStorageRestHandler = (rowId: number, value: number) => {
    const row = mainTable.value.find(({ id }) => id === rowId);

    if (row) {
      row.storageRest.value.rest = value;
    }
  };

  const changeMainTableOrderSpeedHandler = (rowId: number, value: number) => {
    const row = mainTable.value.find(({ id }) => id === rowId);

    if (row) {
      row.orderSpeed.rest = value;
    }
  };

  const changeMeasureTableStorageRestHandler = (
    mainTableRowId: number,
    measureTableRowId: number,
    value: number
  ) => {
    const mainTableRow = mainTable.value.find(
      ({ id }) => id === mainTableRowId
    );

    if (mainTableRow && mainTableRow.measureTable) {
      const measureTableRow = mainTableRow.measureTable.find(
        ({ id }) => id === measureTableRowId
      );

      if (measureTableRow) {
        measureTableRow.storageRest.value.rest = value;
      }
    }
  };

  const changeMeasureTableInRoadHandler = (
    mainTableRowId: number,
    measureTableRowId: number,
    value: number
  ) => {
    const mainTableRow = mainTable.value.find(
      ({ id }) => id === mainTableRowId
    );

    if (mainTableRow && mainTableRow.measureTable) {
      const measureTableRow = mainTableRow.measureTable.find(
        ({ id }) => id === measureTableRowId
      );

      if (measureTableRow) {
        measureTableRow.inRoad.rest = value;
      }
    }
  };
</script>

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
      <h2 class="main-page-body__title">
        Товары: <span>{{ mainTable.length }} шт.</span>
      </h2>
      <main-table
        class="main-page-body__table"
        :table="mainTable"
        :change-main-table-in-road-handler="changeMainTableInRoadHandler"
        :change-main-table-order-speed-handler="
          changeMainTableOrderSpeedHandler
        "
        :change-main-table-storage-rest-handler="
          changeMainTableStorageRestHandler
        "
        :change-main-table-wb-rest-handler="changeMainTableWbRestHandler"
        :change-measure-table-storage-rest-handler="
          changeMeasureTableStorageRestHandler
        "
        :change-measure-table-in-road-handler="changeMeasureTableInRoadHandler"
      />
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
    @apply p-[30px] rounded-[8px] bg-white overflow-hidden;
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
