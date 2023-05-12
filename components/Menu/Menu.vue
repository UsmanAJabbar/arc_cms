<template>
  <nav :id="id">
    <ul class="menu-list">
      <li class="menu-item" v-for="menuItem in routes" :key="menuItem.path">
        <NuxtLink :to="menuItem.path">{{ menuItem.name }}</NuxtLink>
        <ul v-if="menuItem.subRoutes" class="submenu-list">
          <li
            class="submenu-item"
            v-for="submenuItem in menuItem.subRoutes"
            :key="`${menuItem.path}${submenuItem.path}`"
          >
            <NuxtLink :to="`${menuItem.path}${submenuItem.path}`">
              {{ submenuItem.name }}
            </NuxtLink>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>
<script setup lang="ts">
import { Route } from '../../layouts/constants';
defineProps({
  routes: Object as PropType<Route[]>,
  id: String,
});
</script>
<style lang="sass" scoped>
@import '@/assets/colors'

.menu-list
  color: black
  .menu-item
    font-size: 2rem
    margin: 0.5rem 0
    transition: all 0.2s
    .submenu-list
      max-height: 0
      overflow: hidden
      transition: all 1s
      .submenu-item
        font-size: 1.5rem
        padding-left: 1rem
        margin: 0.5rem 0

  &:hover
    .menu-item:not(:hover)
      color: $light-gray
    .menu-item:hover
      .submenu-list
        max-height: 20rem
      .submenu-item:not(:hover)
        color: $light-gray
</style>
