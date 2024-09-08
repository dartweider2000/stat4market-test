<script setup lang="ts">
  import type { IProduct } from "@/types";

  defineProps<{
    product: IProduct;
  }>();
</script>

<template>
  <div class="product">
    <div class="product__left">
      <router-link :to="product.to">
        <img
          :src="product.image"
          class="product__image"
          alt="default-product"
        />
      </router-link>
    </div>
    <div class="product__right">
      <div class="product__interactive">
        <router-link :to="product.to" class="product__link">
          {{ product.name }}
        </router-link>
        <div class="product__icons">
          <router-link :to="product.to" class="product__link-icon">
            <svg width="16" height="16">
              <use xlink:href="#link"></use>
            </svg>
          </router-link>
          <button class="product__info-icon">
            <svg width="20" height="20">
              <use xlink:href="#info"></use>
            </svg>
          </button>
        </div>
      </div>
      <div class="product__article">Артикул WB : {{ product.article }}</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .product {
    @apply grid grid-cols-[35px,1fr] gap-[16px];
    // .product__left
    &__left {
    }
    // .product__image
    &__image {
      @apply max-w-full;
    }
    // .product__right
    &__right {
      @apply grid gap-[4px];
    }
    // .product__interactive
    &__interactive {
      @apply grid grid-cols-[1fr,auto,auto] items-end gap-[4px];
    }
    // .product__link
    &__link {
      @apply text-ellipsis overflow-hidden block text-[--blue] leading-[18px] min-w-[250px];
      -webkit-line-clamp: 2;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      font-size: 13px;
    }
    &__icons {
      @apply grid grid-flow-col justify-start items-center gap-[4px] text-[--blue];
    }
    // .product__link-icon
    &__link-icon {
    }
    // .product__info-icon
    &__info-icon {
    }
    // .product__article
    &__article {
      @apply text-[--brown] leading-[16px];
      font-size: 12px;
    }
  }
</style>
