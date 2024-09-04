<script setup lang="ts">
  import SidebarListItem from "@/components/sidebar/sidebar-list-item.vue";
  import SidebarSocialMedia from "@/components/sidebar/sidebar-social-media.vue";
</script>

<template>
  <aside class="sidebar">
    <header class="sidebar__header">
      <router-link to="/" class="sidebar__header-link">
        <div class="sidebar__logo">
          <svg width="32" height="32">
            <use xlink:href="#logo"></use>
          </svg>
        </div>
        <div class="sidebar__logo-text">Stat<span>4</span>Market</div>
      </router-link>
    </header>
    <div class="sidebar__body">
      <ul class="sidebar__items-list">
        <li class="sidebar__item">
          <sidebar-list-item label="Мой склад" to="/">
            <template #icon>
              <svg width="24" height="24">
                <use xlink:href="#store"></use>
              </svg>
            </template>
          </sidebar-list-item>
        </li>
      </ul>
    </div>
    <footer class="sidebar__footer">
      <div class="sidebar__socials">
        <sidebar-social-media to="/" class="sidebar__social">
          <template #icon>
            <svg width="14" height="13">
              <use xlink:href="#telegram"></use>
            </svg>
          </template>
        </sidebar-social-media>
        <sidebar-social-media to="/" class="sidebar__social">
          <template #icon>
            <svg width="14" height="13">
              <use xlink:href="#instagram"></use>
            </svg>
          </template>
        </sidebar-social-media>
        <sidebar-social-media to="/" class="sidebar__social">
          <template #icon>
            <svg width="14" height="13">
              <use xlink:href="#vk"></use>
            </svg>
          </template>
        </sidebar-social-media>
      </div>
      <router-link to="/" class="sidebar__partners"
        >Партнерская программа</router-link
      >
    </footer>
  </aside>
</template>

<style scoped lang="scss">
  .sidebar {
    @apply grid grid-rows-[auto,1fr,auto] pb-[24px] sticky h-dvh w-[240px] top-0 left-0 bg-[--dark-blue];
    // .sidebar__header
    &__header {
      @apply py-[24px] px-[20px];
    }
    &__header-link {
      @apply grid grid-flow-col gap-[8px] items-center justify-start;
    }
    // .sidebar__logo
    &__logo {
    }
    // .sidebar__logo-text
    &__logo-text {
      @apply text-ellipsis overflow-hidden whitespace-nowrap text-white font-extrabold;
      font-size: 16px;

      & > span {
        @apply text-[--pink];
      }
    }
    // .sidebar__body
    &__body {
    }
    // .sidebar__items-list
    &__items-list {
      @apply grid;
    }
    // .sidebar__item
    &__item {
    }
    // .sidebar__footer
    &__footer {
      @apply grid justify-items-center gap-[16px];
    }
    // .sidebar__socials
    &__socials {
      @apply grid grid-flow-col justify-center gap-[24px] items-center;
    }
    // .sidebar__social
    &__social {
    }
    // .sidebar__partners
    &__partners {
      @apply text-[--gray] border-b-[1px] border-[--gray] border-dashed leading-[18px];
      font-size: 13px;
    }
  }
</style>
