<script setup lang="ts">
  import ProductDescription from "@/components/product-description.vue";
  import StorageCell from "@/components/storage-cell.vue";
  import SelectionNumber from "@/components/selection-number.vue";
  import BlueButton from "@/components/blue-button.vue";
  import CustomUnderline from "@/components/custom-underline.vue";
  import { ref } from "vue";

  const num = ref<number>(123);
  const changeValueHandler = (v: number) => {
    num.value = v || 0;
  };

  const specNum = ref<number>(30);

  const isOpenSubTable = ref<boolean>(false);
  const hasMeasureRow = ref<boolean>(true);
  const toggleSubTable = () => {
    isOpenSubTable.value = !isOpenSubTable.value;
  };
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
  <tr
    v-if="hasMeasureRow"
    class="toggle-row"
    :class="{ 'is-closed': !isOpenSubTable }"
  >
    <td class="toggle-row__data">
      <div class="toggle-row__cell">
        <button class="toggle" @click="toggleSubTable">
          <div class="toggle__text">
            <p class="toggle__paragraph">Размерный ряд</p>
            <custom-underline class="toggle__underline" />
          </div>
          <svg width="16" height="16" class="toggle__icon">
            <use xlink:href="#double-arrow-down"></use>
          </svg>
        </button>
      </div>
    </td>
    <td colspan="7" class="toggle-row__data">
      <div class="toggle-row__cell"></div>
    </td>
  </tr>
  <tr v-if="hasMeasureRow && isOpenSubTable" class="sub-table-row">
    <td colspan="8" class="sub-table-row__data">
      <table class="sub-table-row__table inner-table">
        <tbody class="inner-table__body">
          <tr class="inner-table__row">
            <td class="inner-table__data">
              <div class="inner-table__cell">
                <div class="measure-header">
                  <svg width="24" height="24" class="measure-header__icon">
                    <use xlink:href="#measuring-tape"></use>
                  </svg>
                  <p class="measure-header__paragraph">Размерный ряд</p>
                </div>
              </div>
            </td>
          </tr>
          <tr class="inner-table__row">
            <td class="inner-table__data">
              <table class="measure-table">
                <colgroup>
                  <col />
                  <col />
                  <col />
                  <col />
                  <col />
                  <col />
                  <col />
                  <col />
                  <col />
                  <col />
                  <col />
                  <col />
                </colgroup>
                <thead></thead>
                <tbody></tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </td>
  </tr>
  <tr class="bottom-space-row">
    <td colspan="8" class="bottom-space-row__data"></td>
  </tr>
</template>

<style scoped lang="scss">
  .space-row {
    // .space-row__data
    &__data {
      @apply py-[8px];
    }
  }

  .bottom-space-row {
    // .bottom-space-row__data
    &__data {
      @apply pb-[20px] border-[1px] border-t-0 border-solid border-[--blue-light] rounded-b-[4px];
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
      @apply px-[20px] pt-[12px] border-solid border-[1px] border-t-0 border-b-0 border-[--blue-light];
    }
  }

  .inner-table {
    border-collapse: separate;
    border-spacing: 0;
    // .inner-table__body
    &__body {
    }
    // .inner-table__row
    &__row {
      &:first-child {
        & > * {
          @apply pl-[20px] py-[12px] pr-[20px] rounded-t-[4px];
        }
      }

      &:last-child {
        & > * {
          @apply pl-[12px] pb-[16px] pr-[16px] rounded-b-[4px];
        }
      }
    }
    // .inner-table__data
    &__data {
      @apply border-l-[4px] border-solid border-[--green] bg-[--gray-light-more];
    }
    // .inner-table__cell
    &__cell {
    }
  }
  .measure-header {
    @apply grid grid-flow-col items-center justify-start gap-[8px];
    // .measure-header__icon
    &__icon {
      @apply text-[--blue];
    }
    // .measure-header__paragraph
    &__paragraph {
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

  .toggle {
    @apply grid grid-flow-col justify-start items-center gap-[8px];
    // .toggle__text
    &__text {
      @apply text-[--blue] leading-[20px] relative mb-[2px];
    }
    // .toggle__paragraph
    &__paragraph {
    }
    // .toggle__underline
    &__underline {
      @apply absolute bottom-0 left-0 w-full;
    }

    &__icon {
      @apply text-[--blue];
      transition: all 0.2s ease 0s;

      .is-closed & {
        @apply rotate-180;
      }
    }
  }
</style>
