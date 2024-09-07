<script setup lang="ts">
  import MainTableHeader from "@/components/main-table/main-table-header/main-table-header.vue";
  import MainTableRow from "@/components/main-table/main-table-row.vue";
  import MainTableCols from "@/components/main-table/main-table-cols.vue";
</script>

<template>
  <table class="main-table">
    <main-table-cols />
    <main-table-header class="main-table__header" />
    <tbody class="main-table__body">
      <main-table-row class="main-table__row" />
    </tbody>
  </table>
  <!-- <table class="table">
    <thead class="table__thead">
      <tr class="table__row">
        <th class="table__header table__header_first">Имя</th>
        <th class="table__header table__header_second">Фамилия</th>
        <th class="table__header table__header_third">Возраст</th>
        <th class="table__header table__header_country">Страна</th>
      </tr>
    </thead>
    <tbody class="table__tbody">
      <tr class="table__row">
        <td colspan="4" class="table__data">
          <tr>
            <td></td>
            <td>2222</td>
            <td></td>
            <td>4444</td>
          </tr>
          <tr>
            <td colspan="4">хахахахахахаххахахахаххааххаха</td>
          </tr>
        </td>
      </tr>
      <tr class="table__row">
        <td class="table__data table__data_first">232323</td>
        <td class="table__data_second">232323</td>
        <td class="table__data_third">232323</td>
        <td class="table__data_fourth">232323</td>
      </tr>
      <tr class="table__row">
        <td class="table__data table__data_first">232323</td>
        <td class="table__data_second">232323</td>
        <td class="table__data_third">232323</td>
        <td class="table__data_fourth">232323</td>
      </tr>
    </tbody>
  </table> -->
</template>

<style scoped lang="scss">
  .main-table {
    @apply block overflow-auto w-full;
    table-layout: fixed;
    border-collapse: separate;
    border-spacing: 0px;
  }

  // .table {
  //   @apply w-full;
  //   // .table__thead
  //   &__thead {
  //   }
  //   // .table__row
  //   &__row {
  //   }
  //   // .table__header
  //   &__header {
  //     // .table__header_first
  //     &_first {
  //       // min-width: 300px;
  //       // max-width: 300px;
  //     }
  //     // .table__header_second
  //     &_second {
  //       // width: 140px;
  //     }
  //     // .table__header_third
  //     &_third {
  //       // width: 240px;
  //     }
  //     // .table__header_country
  //     &_country {
  //       // width: 340px;
  //     }
  //   }
  //   // .table__tbody
  //   &__tbody {
  //   }
  //   // .table__data
  //   &__data {
  //     // .table__data_first
  //     &_first {
  //       min-width: 300px;
  //       max-width: 300px;
  //     }
  //     // .table__data_second
  //     &_second {
  //       min-width: 140px;
  //     }
  //     // .table__data_third
  //     &_third {
  //       min-width: 240px;
  //     }
  //     // .table__data_fourth
  //     &_fourth {
  //       min-width: 340px;
  //     }
  //   }
  // }
</style>
