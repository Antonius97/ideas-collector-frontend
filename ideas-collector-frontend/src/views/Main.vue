<template>
  <div class="page-container">
    <SearchField class="col-12 round" @input="onSearch"/>
    <ThemeButton class="theme-button"/>

    <Toolbar class="toolbar medium-margin-top">
      <template #left>
        <StatusesSelector />
      </template>
      <template #right>
        <UploadButton class="small-margin-right"/>
        <AddButton />
      </template>
    </Toolbar>
  </div>
</template>

<script lang="ts">
import SearchField from '../components/SearchField.vue';
import ThemeButton from '../components/ThemeButton.vue';
import Toolbar from '../components/Toolbar.vue';
import StatusesSelector from '../components/StatusesSelector.vue';
import UploadButton from '@/components/UploadButton.vue';
import AddButton from '@/components/AddButton.vue';

export default {
  components: {
    SearchField,
    ThemeButton,
    Toolbar,
    StatusesSelector,
    UploadButton,
    AddButton
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
