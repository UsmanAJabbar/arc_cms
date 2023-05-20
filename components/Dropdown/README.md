# Dropdown - Component

## Initialization

The following are the set of props that can be passed to the `<Dropdown />` component

### Props

- `v-model:selected`: String - required - This records changes when a user selects a dropdown item.
- `options`: DropdownItem[] - required - This has a set of options that should be available in the dropdown when expanded.
- `full-width`: Boolean - optional - This allows us to tell the dropdown container whether it should take up the full width of the container.

#### Interfaces

- DropdownItem
  - label: String - User-friendly value to display in the dropdown
  - value: String - Value associated with the label/item. This is the value that is emitted to the selected v-model.

### How to use

```
<template>
  <Dropdown
    v-model:selected="selectedOption"
    :options="dropdownOptions"
    full-width
  />
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
```
