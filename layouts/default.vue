<template>
  <div class="window">
    <div class="layout-container">
      <Sidepanel bordered>
        <div class="menu-container">
          <Menu :routes="ROUTING" id="primary-menu" />
        </div>
        <template #header>Dashboard</template>
        <template #footer>
          <div class="sidebar-footer-slot">
            <p id="site-name">GeeksULTD</p>
            <div id="logout">Logout<i class="ri-logout-box-line"></i></div>
          </div>
        </template>
      </Sidepanel>
      <div class="content-container">
        <slot />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ROUTING } from './constants';
</script>
<style lang="scss" scoped>
.window {
  display: flex;
  align-items: center;
  justify-content: center;
}
.layout-container {
  width: 1400px;
  border-right: solid 1px #e9e9e9;
  display: flex;
}
.menu-container {
  margin-top: 15rem;
}

.sidebar-footer-slot {
  display: flex;
  flex-direction: column;
  #site-name {
    font-size: 1.5rem;
    margin: 0.75rem 0;
  }
}
</style>
