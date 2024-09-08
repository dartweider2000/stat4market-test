<script setup lang="ts">
  import MainTableHeader from "@/components/main-table/main-table-header/main-table-header.vue";
  import MainTableRow from "@/components/main-table/main-table-row.vue";
  import MainTableCols from "@/components/main-table/main-table-cols.vue";
  import type { IMainTableRow } from "@/types";

  defineProps<{
    table: IMainTableRow[];
    changeMainTableWbRestHandler: (rowId: number, value: number) => void;
    changeMainTableInRoadHandler: (rowId: number, value: number) => void;
    changeMainTableStorageRestHandler: (rowId: number, value: number) => void;
    changeMainTableOrderSpeedHandler: (rowId: number, value: number) => void;
    changeMeasureTableStorageRestHandler: (
      mainTableRowId: number,
      measureTableRowId: number,
      value: number
    ) => void;
    changeMeasureTableInRoadHandler: (
      mainTableRowId: number,
      measureTableRowId: number,
      value: number
    ) => void;
  }>();
</script>

<template>
  <table class="main-table">
    <main-table-cols />
    <main-table-header class="main-table__header" />
    <tbody class="main-table__body">
      <main-table-row
        v-for="row in table"
        class="main-table__row"
        :key="row.id"
        :row="row"
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
    </tbody>
  </table>
</template>

<style scoped lang="scss">
  .main-table {
    @apply block overflow-auto w-full;
    table-layout: fixed;
    border-collapse: separate;
    border-spacing: 0px;
  }
</style>
