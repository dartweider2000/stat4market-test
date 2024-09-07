<script setup lang="ts">
  import ProductDescription from "@/components/product-description.vue";
  import StorageCell from "@/components/storage-cell.vue";
  import SelectionNumber from "@/components/selection-number.vue";
  import BlueButton from "@/components/blue-button.vue";
  import { ref } from "vue";

  const num = ref<number>(123);
  const changeValueHandler = (v: number) => {
    num.value = v || 0;
  };

  const specNum = ref<number>(30);
</script>

<template>
  <tr class="space-row">
    <td colspan="8" class="space-row__data"></td>
  </tr>
  <tr class="data-row">
    <td class="data-row__data">
      <div class="data-row__cell">
        <product-description />
      </div>
    </td>
    <td class="data-row__data">
      <div class="data-row__cell">
        <storage-cell :days="500">
          <selection-number
            :value="num"
            :can-interactive="true"
            @change-value="changeValueHandler"
          />
        </storage-cell>
      </div>
    </td>
    <td class="data-row__data">
      <div class="data-row__cell">
        <storage-cell :days="500">
          <selection-number :value="num" :can-interactive="false" />
        </storage-cell>
      </div>
    </td>
    <td class="data-row__data">
      <div class="data-row__cell">
        <storage-cell :days="500">
          <selection-number
            :value="num"
            :can-interactive="true"
            @change-value="changeValueHandler"
          />
        </storage-cell>
      </div>
    </td>
    <td class="data-row__data">
      <div class="data-row__cell">
        <storage-cell :days="500">
          <selection-number :value="num" :can-interactive="false" />
        </storage-cell>
      </div>
    </td>
    <td class="data-row__data">
      <div class="data-row__cell">
        <selection-number
          :value="num"
          :can-interactive="true"
          @change-value="changeValueHandler"
        />
      </div>
    </td>
    <td class="data-row__data">
      <div class="data-row__cell">
        <div class="order-speed">
          <selection-number
            :value="num"
            :can-interactive="true"
            measure="шт. / день"
            @change-value="changeValueHandler"
          />
          <div class="order-speed__computed">
            {{ num * specNum }} шт. / {{ specNum }} дней
          </div>
        </div>
      </div>
    </td>
    <td class="data-row__data">
      <div class="data-row__cell">
        <blue-button />
      </div>
    </td>
  </tr>
  <tr class="toggle-row">
    <td class="toggle-row__data">
      <div class="toggle-row__cell">Переключаем</div>
    </td>
    <td colspan="7" class="toggle-row__data">
      <div class="toggle-row__cell"></div>
    </td>
  </tr>
  <tr class="sub-table-row">
    <td colspan="8" class="sub-table-row__data">
      <table class="sub-table-row__table">
        i am table
      </table>
    </td>
  </tr>
</template>

<style scoped lang="scss">
  .space-row {
    // .space-row__data
    &__data {
      @apply py-[8px];
    }
  }
  .data-row {
    // .data-row__data
    &__data {
      @apply pt-[20px] pb-[12px] px-[8px] border-solid border-t-[1px] border-[--blue-light];
      vertical-align: top;

      &:first-child {
        @apply pl-[20px] border-l-[1px] rounded-tl-[4px];
      }

      &:last-child {
        @apply pr-[20px] border-r-[1px] rounded-tr-[4px];
      }

      // &_vertical-start {
      // }
    }
    // .data-row__cell
    &__cell {
    }
  }
  .toggle-row {
    // .toggle-row__data
    &__data {
      @apply border-solid border-[--blue-light];

      &:first-child {
        @apply pl-[20px] border-l-[1px];
      }

      &:last-child {
        @apply pr-[20px] border-r-[1px];
      }
    }
    // .toggle-row__cell
    &__cell {
    }
  }
  .sub-table-row {
    // .sub-table-row__table
    &__table {
      @apply w-full;
    }
    // .sub-table-row__data
    &__data {
      @apply px-[20px] pb-[20px] border-solid border-[1px] border-t-0 border-[--blue-light] rounded-b-[4px];
    }
  }

  .order-speed {
    @apply grid gap-[6px];
    // .order-speed__computed
    &__computed {
      @apply text-[--black] leading-[20px];
      font-size: 14px;
    }
  }
</style>
