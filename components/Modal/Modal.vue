<template>
  <div
    v-if="showModal"
    :id="id"
    class="modal"
    @click="handleClick"
    @closeModal="handleClick"
  >
    <div class="content" @click.stop>
      <slot />
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps({
  id: String,
});
const showModal = ref(true);
// Closes the modal if the user clicks outside of the modal content container
const handleClick = () => {
  showModal.value = false;
};
</script>
<style lang="sass" scoped>
.modal
  position: absolute
  top: 0
  left: 0
  width: 100vw
  height: 100vh
  display: flex
  justify-content: center
  align-items: center
  background-color: #000000a6
  z-index: 100

  .content
    z-index: 200
</style>
