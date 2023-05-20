<template>
  <NuxtLayout>
    <Dropdown
      :selected="selectedOption"
      :options="dropdownOptions"
      @selected="selectedOption = $event"
    />
  </NuxtLayout>
</template>
<script setup lang="ts">
const dropdownOptions = [
  {
    label: 'Some Item',
    value: 'Some Value',
  },
  {
    label: 'AAAAAA',
    value: 'Amazon',
  },
  {
    label: 'Ark',
    value: 'Creative',
  },
];
const selectedOption = ref('');
</script>
<style lang="scss" scoped></style>
