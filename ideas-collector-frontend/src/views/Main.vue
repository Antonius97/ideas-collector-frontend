<template>
  <div class="page-container">
    <SearchField class="col-12 round" @input="onSearch"/>
    <ThemeButton class="theme-button"/>
  </div>
</template>

<script lang="ts">
import SearchField from '../components/SearchField.vue';
import ThemeButton from '../components/ThemeButton.vue';

export default {
  components: {
    SearchField,
    ThemeButton,
  },
  methods: {
    onSearch(query: string) {
      console.log(`Search query is ${query}`);
    },
  },
};
</script>

<style scoped>
.page-container {
  position: relative;
}

.theme-button {
  position: absolute;
  right: 1rem;
  top: 3rem;
}
</style>
