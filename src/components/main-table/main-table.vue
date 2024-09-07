<script setup lang="ts">
  import type { ITableRow } from "@/types";
  import { ref } from "vue";
  import MainTableHeader from "@/components/main-table/main-table-header/main-table-header.vue";

  const tableItemsList = ref<ITableRow[]>([
    {
      id: 1,
      firstName:
        "НикитаНикитаНикитаНикитаНикитаНикитаНикитаНикитаНикитаНикитаНикита",
      lastName: "Иванов",
      age: 23,
      country: "Россия",
    },
    {
      id: 2,
      firstName: "Денис",
      lastName: "Прозоров",
      age: 23,
      country: "Россия",
    },
    {
      id: 3,
      firstName: "Алексей",
      lastName: "Соколов",
      age: 35,
      country: "Россия",
    },
    {
      id: 4,
      firstName: "Себастьян",
      lastName: "Феттель",
      age: 38,
      country: "Германия",
    },
  ]);
</script>

<template>
  <table class="main-table">
    <colgroup class="main-table__colgroup">
      <col class="main-table__col main-table__col_1" />
      <col class="main-table__col main-table__col_2" />
      <col class="main-table__col main-table__col_3" />
      <col class="main-table__col main-table__col_4" />
      <col class="main-table__col main-table__col_5" />
      <col class="main-table__col main-table__col_6" />
      <col class="main-table__col main-table__col_7" />
      <col class="main-table__col main-table__col_8" />
    </colgroup>
    <main-table-header class="main-table__header" />
    <tbody>
      <tr>
        <td>
          <div>Артикул</div>
        </td>
        <td>
          <div>Артикул</div>
        </td>
        <td>
          <div>Артикул</div>
        </td>
        <td>
          <div>Артикул</div>
        </td>
        <td>
          <div>Артикул</div>
        </td>
        <td>
          <div>Артикул</div>
        </td>
        <td>
          <div>Артикул</div>
        </td>
        <td>
          <div>Артикул</div>
        </td>
      </tr>
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
    border-spacing: 16px;
  }

  .main-table {
    // .main-table__colgroup
    &__colgroup {
    }
    // .main-table__col
    &__col {
      // .main-table__col_1
      &_1 {
        @apply min-w-[385px] w-full rounded-[140px] overflow-hidden;
      }
      // .main-table__col_2
      &_2 {
      }
      // .main-table__col_3
      &_3 {
      }
      // .main-table__col_4
      &_4 {
      }
      // .main-table__col_5
      &_5 {
      }
      // .main-table__col_6
      &_6 {
      }
      // .main-table__col_7
      &_7 {
      }
      // .main-table__col_8
      &_8 {
      }
    }
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
