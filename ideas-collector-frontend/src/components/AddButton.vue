<template>
  <div class="wrapper round" @click="handleAddButtonClick">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" class="icon">
      <g>
          <line class="line" x1="32" y1="1.5" x2="32" y2="62.5" />
          <line class="line" x1="1.5" y1="32" x2="62.5" y2="32" />
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  methods: {
    handleAddButtonClick() {
        console.log("Add Clicked");
    }
  },
};
</script>

<style scoped>
.wrapper {
  width: 2rem;
  height: 2rem;
  padding: 0.5rem;
  cursor: pointer;
  background-color: var(--primary-color);
}

.icon {
  width: 1rem;
  height: 1rem;
}

.line {
  fill: none;
  stroke: #FFFFFF;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 3px;
}
</style>