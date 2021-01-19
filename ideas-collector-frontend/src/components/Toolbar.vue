<template>
  <div class="container">
      <div class="part-container left">
        <slot name="left"></slot>
      </div>
      <div class="part-container right">
        <slot name="right"></slot>
      </div>
  </div>
</template>

<style scoped>
.container {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 2rem;
    align-items: stretch;
    justify-content: space-between;
}

.part-container {
    height: 100%;
    display: flex;
    flex-direction: row;
}
</style>