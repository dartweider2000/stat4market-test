<script setup lang="ts"></script>

<template>
  <div class="product">
    <div class="product__left">
      <img
        src="/img/default-product.jpg"
        class="product__image"
        alt="default-product"
      />
    </div>
    <div class="product__right">
      <div class="product__interactive">
        <a href="/" class="product__link"
          >Долговечный букет из 9 роз в коробке, в подарок — вечные
          стабилизированные цветы,</a
        >
        <div class="product__icons">
          <a href="/" class="product__link-icon">
            <svg width="16" height="16">
              <use xlink:href="#link"></use>
            </svg>
          </a>
          <button class="product__info-icon">
            <svg width="20" height="20">
              <use xlink:href="#info"></use>
            </svg>
          </button>
        </div>
      </div>
      <div class="product__article">Артикул WB : 9619790</div>
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
