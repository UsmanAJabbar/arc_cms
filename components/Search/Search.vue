<template>
  <div class="search-container">
    <input
      class="search-input"
      v-model="searchText"
      :placeholder="placeholder"
      @input="trimInput"
      @keypress.enter="submitEvent"
    />
    <i class="ri-search-line ri-1x search-icon" @click="submitEvent"></i>
  </div>
</template>
<script setup lang="ts">
defineProps({
  placeholder: String,
});
const emit = defineEmits<SearchEmits>();
const MAX_LENGTH = 48;
const searchText = ref('');
const trimInput = () => {
  searchText.value = searchText.value.slice(0, MAX_LENGTH);
};
const submitEvent = () => {
  emit('searchedFor', searchText.value);
};

interface SearchEmits {
  (e: 'searchedFor', value: string): void;
}
</script>
<style lang="scss" scoped>
.search-container {
  border-radius: 2rem;
  border: solid 1px #e9e9e9;
  padding: 0.5rem 1rem;
  outline: none;
  width: 20rem;
}
.search-input {
  width: calc(100% - 1.4em);
  border: none;
  outline: none;
}
.search-icon {
  margin: 0 0.2em;
}
</style>
