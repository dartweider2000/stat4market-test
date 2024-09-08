<script setup lang="ts">
  import BlueButton from "@/components/blue-button.vue";
  import SelectionNumber from "@/components/selection-number.vue";
  import type { IMeasureTableRow } from "@/types";

  defineProps<{
    row: IMeasureTableRow;
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
  <tr class="measure-row">
    <td class="measure-row__data measure-row__data_1">
      <div class="measure-row__cell">
        <div class="size">
          <span>{{ row.size }}</span>
        </div>
      </div>
    </td>
    <td class="measure-row__data measure-row__data_2">
      <div class="measure-row__cell">
        <selection-number
          :can-interactive="row.wbRest.value.canModify"
          :value="row.wbRest.value.rest"
        />
      </div>
    </td>
    <td class="measure-row__data measure-row__data_3">
      <div class="measure-row__cell">{{ row.wbRest.days }} дня</div>
    </td>
    <td class="measure-row__data measure-row__data_4">
      <div class="measure-row__cell">
        <selection-number
          :can-interactive="row.providedRest.value.canModify"
          :value="row.providedRest.value.rest"
        />
      </div>
    </td>
    <td class="measure-row__data measure-row__data_5">
      <div class="measure-row__cell">{{ row.providedRest.days }} дня</div>
    </td>
    <td class="measure-row__data measure-row__data_6">
      <div class="measure-row__cell">
        <selection-number
          :can-interactive="row.storageRest.value.canModify"
          :value="row.storageRest.value.rest"
          @change-value="(value: number) => changeMeasureTableStorageRestHandler(row.id, value)"
        />
      </div>
    </td>
    <td class="measure-row__data measure-row__data_7">
      <div class="measure-row__cell">{{ row.storageRest.days }} дня</div>
    </td>
    <td class="measure-row__data measure-row__data_8">
      <div class="measure-row__cell">
        <selection-number
          :can-interactive="row.allRest.value.canModify"
          :value="row.allRest.value.rest"
        />
      </div>
    </td>
    <td class="measure-row__data measure-row__data_9">
      <div class="measure-row__cell">{{ row.allRest.days }} дня</div>
    </td>
    <td class="measure-row__data measure-row__data_10">
      <div class="measure-row__cell">
        <selection-number
          :can-interactive="row.inRoad.canModify"
          :value="row.inRoad.rest"
          @change-value="(value: number) => changeMeasureTableInRoadHandler(row.id, value)"
        />
      </div>
    </td>
    <td class="measure-row__data measure-row__data_11">
      <div class="measure-row__cell">{{ row.orderSpeed }} шт. / день</div>
    </td>
    <td class="measure-row__data measure-row__data_12">
      <div class="measure-row__cell">
        <blue-button />
      </div>
    </td>
  </tr>
</template>

<style scoped lang="scss">
  .measure-row {
    // .measure-row__data
    &__data {
      @apply px-[16px] py-[12px] bg-white border-b-[1px] border-solid border-[--brown-light];
      // .measure-row__data_1
      &_1 {
      }
      // .measure-row__data_2
      &_2 {
      }
      // .measure-row__data_3
      &_3 {
      }
      // .measure-row__data_4
      &_4 {
      }
      // .measure-row__data_5
      &_5 {
      }
      // .measure-row__data_6
      &_6 {
      }
      // .measure-row__data_7
      &_7 {
      }
      // .measure-row__data_8
      &_8 {
      }
      // .measure-row__data_9
      &_9 {
      }
      // .measure-row__data_10
      &_10 {
      }
      // .measure-row__data_11
      &_11 {
      }
      // .measure-row__data_12
      &_12 {
      }
    }
    // .measure-row__cell
    &__cell {
    }
  }

  .size {
    @apply min-w-[72px] px-[12px] py-[1px] text-white bg-[--pink] leading-[20px] text-center rounded-[4px];
    font-size: 13px;

    & > span {
      @apply translate-y-[1px] inline-block;
    }
  }
</style>
