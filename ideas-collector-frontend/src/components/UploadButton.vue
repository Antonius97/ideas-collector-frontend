<template>
  <div class="wrapper" @click="handleUploadButtonClick">
    <input type="file" ref="fileInput" class="file-input" @change="onFileInputChange"/>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" class="icon">
      <g>
        <polyline
            class="line"
            points="1.5 44.95 1.5 62.42 62.51 62.42 62.51 44.95"
        />
        <line class="line" x1="32.01" y1="1.5" x2="32.01" y2="52.79" />
        <line class="line" x1="32" y1="1.5" x2="45.99" y2="15.48" />
        <line class="line" x1="32.01" y1="1.5" x2="18.12" y2="15.48" />
      </g>
    </svg>
  </div>
</template>

<script>
export default {
    methods: {
        handleUploadButtonClick() {
            this.$refs.fileInput.click();
        },
        onFileInputChange() {
            console.log(this.$refs.fileInput.files);
        }
    }
};
</script>

<style scoped>
.wrapper {
    width: 2rem;
    height: 2rem;
    padding: 0.5rem;
    cursor: pointer;
}

.icon {
    width: 1rem;
    height: 1rem;
}

.line {
    fill: none;
    stroke: var(--primary-color);
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 3px;
}

.file-input {
    display: none;
}
</style>