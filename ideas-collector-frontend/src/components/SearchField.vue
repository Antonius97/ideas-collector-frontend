<template>
  <div class="wrapper">
    <input
      type="text"
      class="search-field round"
      placeholder="Search"
      @keypress="keyHandler"
      v-model="query"
    />

    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 63.84 63.84"
      class="search-icon"
    >
      <g>
        <circle class="cls-1" cx="20.92" cy="20.92" r="19.42" />
        <line class="cls-1" x1="34.65" y1="34.65" x2="62.34" y2="62.34" />
      </g>
    </svg>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      query: '',
    };
  },
  methods: {
    keyHandler(event: KeyboardEvent) {
      const isEnter = event.key === 'Enter';

      if (isEnter) {
        this.$emit('input', this.$data.query);
      }
    },
  },
};
</script>

<style scoped>
.wrapper {
  position: relative;
  height: 4rem;
}

.search-field {
  height: 4rem;
  width: 100%;
  background-color: var(--block-background-color);
  border: 2px solid transparent;
  padding: 1rem 1rem 1rem 4rem;
  color: var(--text-primary-color);
  font-size: var(--paragraph-size);
  outline: none;
  transition: 0.15s border-color, 0.25s background-color, 0.25s color;
}

.search-field:focus {
  border-color: var(--primary-color);
}

.search-field:focus + .search-icon {
  stroke: var(--primary-color);
}

.search-icon {
  position: absolute;
  width: 1.5rem;
  height: 1.5rem;
  left: 1.25rem;
  top: 1.25rem;

  fill: none;
  stroke: var(--text-primary-color);
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 3px;

  transition: 0.15s stroke;
}
</style>
