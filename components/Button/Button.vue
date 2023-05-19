<template>
  <button :class="['btn', maxWidth && 'max-width']"><slot /></button>
</template>
<script setup lang="ts">
defineProps({
  bordered: Boolean,
  maxWidth: Boolean,
});
</script>
<style lang="sass" scoped>
.btn
  background-color: black
  color: white
  border-radius: 100rem
  padding: 0.5rem 1.5rem
  font-size: 1rem
  min-width: 5rem
.max-width
  width: 100%
</style>
