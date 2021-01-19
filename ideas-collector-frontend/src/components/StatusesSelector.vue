<template>
<div class="wrapper noselect">
  <div class="button all small-margin-right" :class="{active: allButton.active}" @click="handleButtonClick(allButton)">
      <p>{{ allButton.text }}</p>
  </div>
  <div class="button small-margin-right" v-for="item in buttons" :key="item.key" :class="{active: item.active}" @click="handleButtonClick(item)">
      <p>{{item.text}}</p>
  </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            allButton: {
                key: "all",
                text: "All",
                active: true
            },
            buttons: [{
                key: "vague",
                text: "Vague Idea",
                active: true
            }, {
                key: "concept",
                text: "Concept",
                active: true
            }, {
                key: "inprogress",
                text: "In progress",
                active: true
            }, {
                key: "completed",
                text: "Completed",
                active: true
            }]
        };
    },
    mounted() {
        this.updateAllButtonState();
    },
    methods: {
        updateAllButtonState() {
            this.allButton.active = this.buttons.every(button => button.active);
        },
        handleButtonClick(button) {
            if (button.key === this.allButton.key) {
                const newValue = !this.allButton.active;

                this.allButton.active = newValue;
                this.buttons.forEach(btn => btn.active = newValue);
            } else {
                button.active = !button.active;
                this.updateAllButtonState();
            }

            const activeButtons = this.buttons.filter(btn => btn.active).map(btn => btn.key);
            this.$emit("selectionChange", activeButtons);
        }
    }
}
</script>

<style scoped>
.wrapper {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    width: 100%;
    height: 100%;
}

.button {
    height: 100%;
    background-color: var(--block-background-color);
    padding: 0 1rem;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: 0.25s background-color;
}

.button > p {
    line-height: 2rem;
    vertical-align: middle;
    color: var(--text-primary-color);
    font-size: var(--paragraph-size);
    font-weight: var(--paragraph-weight);
    transition: 0.25s color;
}

.button.active {
    background-color: var(--block-active-background-color);
}

.button.active > p {
    color: var(--block-active-text-color);
}
</style>