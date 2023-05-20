<template>
  <div class="dropdown-container">
    <div
      :class="[
        'selected-option',
        !selected && 'placeholder',
        fullWidth ? 'max-width' : 'fit-width',
      ]"
      @click="setShowDropdown"
    >
      <div class="label">{{ selected || 'Select an option' }}</div>
      <i
        id="select-cta"
        :class="[
          'ri-arrow-down-s-line',
          'ri-lg',
          showDropdown && 'rotate-icon',
        ]"
      ></i>
    </div>
    <ul
      :class="[
        'select',
        showDropdown && 'dropdown-visible',
        fullWidth ? 'max-width' : 'fit-width',
      ]"
    >
      <li
        class="option"
        v-for="node in options"
        @click="() => onSelect(node.value)"
        :key="node.value"
      >
        {{ node.label }}
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  options: Array as PropType<DropdownItem[]>,
  selected: String,
  fullWidth: Boolean,
});
const emit = defineEmits(['update:selected']);
const { options } = toRefs(props);
const showDropdown = ref(false);
const setShowDropdown = () => (showDropdown.value = !showDropdown.value);
const onSelect = (selectedNode: string) => {
  emit('update:selected', selectedNode);
  showDropdown.value = false;
};
const selected = computed({
  get: () => {
    if (!options?.value) {
      console.error(':options prop is missing');
      return '';
    }

    const selectedInOptions = options.value.find(
      (opt) => opt.value === props?.selected
    );

    return selectedInOptions?.label || '';
  },
  set: (selectedNode: string): void => {
    if (!selectedNode || !options?.value) {
      return;
    }

    const selectedInOptions = options.value.find(
      (opt) => opt.value === selectedNode
    );

    emit('update:selected', selectedInOptions?.value || '');
  },
});
interface DropdownItem {
  label: string;
  value: string;
}
</script>
<style lang="sass" scoped>
.full-width
  width: 100%
.fit-width
  width: fit-content
.dropdown-container
  .selected-option
    padding: 0.6rem 0.5rem
    display: flex
    justify-content: space-between
    user-select: none
    &.placeholder
      color: #dfdfdf
    &:hover
      cursor: pointer
    // #select-cta
    //   transition: all 0.2s
    //   transform: rotate(-90deg)
    //   color: black
    //   &.rotate-icon
    //     transform: rotate(0deg)

  .select
    cursor: default
    border: solid 1px #dfdfdf
    border-radius: 0.5rem
    overflow: hidden
    display: none
    min-width: 10rem
    &.dropdown-visible
      display: block
      z-index: 10
      position: absolute
    .option
      padding: 0.5rem
      font-size: 0.7rem
      &:hover
        background-color: #f1f1f1
</style>
