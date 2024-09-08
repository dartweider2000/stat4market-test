<script setup lang="ts">
  import MainTableHeader from "@/components/main-table/main-table-header/main-table-header.vue";
  import MainTableRow from "@/components/main-table/main-table-row.vue";
  import MainTableCols from "@/components/main-table/main-table-cols.vue";
  import type { IMainTableRow } from "@/types";

  defineProps<{
    table: IMainTableRow[];
  }>();

  const emit = defineEmits<{
    "change-wb-rest": [rowId: number, value: number];
    "change-main-table-in-road": [rowId: number, value: number];
    "change-main-table-storage-rest": [rowId: number, value: number];
    "change-order-speed": [rowId: number, value: number];
  }>();

  const changeWbRestHandler = (rowId: number, value: number) => {
    emit("change-wb-rest", rowId, value);
  };

  const changeMainTableInRoadHandler = (rowId: number, value: number) => {
    emit("change-main-table-in-road", rowId, value);
  };

  const changeMainTableStorageRestHandler = (rowId: number, value: number) => {
    emit("change-main-table-storage-rest", rowId, value);
  };

  const changeOrderSpeedHandler = (rowId: number, value: number) => {
    emit("change-order-speed", rowId, value);
  };
</script>

<template>
  <table class="main-table">
    <main-table-cols />
    <main-table-header class="main-table__header" />
    <tbody class="main-table__body">
      <main-table-row
        v-for="row in table"
        :key="row.id"
        :row="row"
        class="main-table__row"
        @change-wb-rest="(value: number) => changeWbRestHandler(row.id, value)"
        @change-main-table-in-road="(value: number) => changeMainTableInRoadHandler(row.id, value)"
        @change-order-speed="(value: number) => changeOrderSpeedHandler(row.id, value)"
        @change-main-table-storage-rest="(value: number) => changeMainTableStorageRestHandler(row.id, value)"
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
