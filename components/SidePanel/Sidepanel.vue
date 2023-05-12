<template>
  <div :class="['panel-container', bordered && 'panel-bordered']">
    <slot name="header"></slot>
    <slot />
    <div class="footer-slot">
      <slot name="footer"> </slot>
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps({
  bordered: Boolean,
});
</script>
<style lang="scss" scoped>
.panel-container {
  height: 100vh;
  width: 20rem;
  padding: 3.5rem;
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 0;
}
.panel-bordered {
  border-right: solid 1px #e9e9e9;
  border-left: solid 1px #e9e9e9;
}
.footer-slot {
  margin-top: auto;
}
</style>
