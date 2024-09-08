<script setup lang="ts">
  import MeasureTableHeader from "@/components/measure-table/measure-table-header.vue";
  import MeasureTableRow from "@/components/measure-table/measure-table-row.vue";
  import type { IMeasureTableRow } from "@/types";

  defineProps<{
    table: IMeasureTableRow[];
    changeMeasureTableStorageRestHandler: (
      measureTableRowId: number,
      value: number
    ) => void;
    changeMeasureTableInRoadHandler: (
      measureTableRowId: number,
      value: number
    ) => void;
  }>();
</script>

<template>
  <table class="measure-table">
    <measure-table-header />
    <tbody class="measure-table__body">
      <measure-table-row
        v-for="row in table"
        :key="row.id"
        :row="row"
        :change-measure-table-storage-rest-handler="
          changeMeasureTableStorageRestHandler
        "
        :change-measure-table-in-road-handler="changeMeasureTableInRoadHandler"
      />
    </tbody>
  </table>
</template>

<style scoped lang="scss">
  .measure-table {
    @apply w-full;
  }
</style>
