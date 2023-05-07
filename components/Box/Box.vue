<template>
  <div
    :class="[
      'container',
      bordered && 'containerBorder',
      wide && 'containerWide',
      square && 'containerSquare',
      maxWidth && 'containerFullWidth',
    ]"
  >
    <slot />
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  bordered: Boolean,
  wide: Boolean,
  square: Boolean,
  maxWidth: Boolean,
});

const propsAreValid = () => {
  const extraKeys = Object.entries(props)
    .filter(([key, value]) => key !== 'bordered')
    .map(([key, value]) => value)
    .reduce((trueCount, propValue) => trueCount + Number(propValue), 0);

  if (extraKeys > 1) {
    throw Error('Extra keys defined');
  }
};

propsAreValid();
</script>
<style lang="scss" scoped>
.container {
  height: 20rem;
  border-radius: 2rem;
  padding: 1.5rem;
}
.containerBorder {
  border: solid 2px #e9e9e9;
}
.containerSquare {
  aspect-ratio: 1/1;
}
.containerWide {
  aspect-ratio: 12/5;
}
</style>
