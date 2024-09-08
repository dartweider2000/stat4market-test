<script setup lang="ts">
  import MeasureTableHeader from "@/components/measure-table/measure-table-header.vue";
  import MeasureTableRow from "@/components/measure-table/measure-table-row.vue";
  import type { IMeasureTableRow } from "@/types";

  defineProps<{
    table: IMeasureTableRow[];
  }>();

  const emit = defineEmits<{
    "change-storage-rest": [rowId: number, value: number];
    "change-in-road": [rowId: number, value: number];
  }>();

  const changeStorageRest = (rowId: number, value: number) => {
    emit("change-storage-rest", rowId, value);
  };

  const changeInRoad = (rowId: number, value: number) => {
    emit("change-in-road", rowId, value);
  };
</script>

<template>
  <table class="measure-table">
    <measure-table-header />
    <tbody class="measure-table__body">
      <measure-table-row
        v-for="row in table"
        :key="row.id"
        :row="row"
        @change-in-road="(value: number) => changeInRoad(row.id, value)"
        @change-store-rest="(value: number) => changeStorageRest(row.id, value)"
      />
    </tbody>
  </table>
</template>

<style scoped lang="scss">
  .measure-table {
    @apply w-full;
  }
</style>
