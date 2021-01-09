<template>
  <div class="container" @click="toggleTheme">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      class="icon"
      :class="{active: isNight}"
    >
      <g>
        <circle class="circle" cx="32" cy="32" r="16" />
        <rect class="line" x="30" width="4" height="8" rx="2" />
        <rect class="line" x="30" y="56" width="4" height="8" rx="2" />
        <rect
          class="line"
          x="2"
          y="28"
          width="4"
          height="8"
          rx="2"
          transform="translate(-28 36) rotate(-90)"
        />
        <rect
          class="line"
          x="58"
          y="28"
          width="4"
          height="8"
          rx="2"
          transform="translate(28 92) rotate(-90)"
        />
        <rect
          class="line"
          x="10.2"
          y="8.2"
          width="4"
          height="8"
          rx="2"
          transform="translate(-5.05 12.2) rotate(-45)"
        />
        <rect
          class="line"
          x="49.8"
          y="47.8"
          width="4"
          height="8"
          rx="2"
          transform="translate(-21.46 51.8) rotate(-45)"
        />
        <rect
          class="line"
          x="10.2"
          y="47.8"
          width="4"
          height="8"
          rx="2"
          transform="translate(-15.8 97.05) rotate(-135)"
        />
        <rect
          class="line"
          x="49.8"
          y="8.2"
          width="4"
          height="8"
          rx="2"
          transform="translate(79.8 57.45) rotate(-135)"
        />
      </g>
    </svg>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      class="icon"
      :class="{active: isDay}"
    >
      <g>
        <path
          class="moon"
      d="M51.58,43.14A32,32,0,0,1,21,1.5a31.08,31.08,0,1,0,40.57,40A32.12,32.12,0,0,1,51.58,43.14Z"
        />
      </g>
    </svg>
  </div>
</template>

<script lang="ts">
import ThemeUtil from '../utils/theme-util';

enum Theme {
  Dark,
  Light,
}

export default {
  data() {
    return {
      currentTheme: ThemeUtil.getCurrentTheme(),
      isDay: false,
      isNight: false,
    };
  },
  mounted() {
    ThemeUtil.attachThemeChanged(this.handleThemeChange);
  },
  methods: {
    handleThemeChange(theme: Theme): void {
      switch (theme) {
        case Theme.Dark: {
          this.isDay = false;
          this.isNight = true;
          this.currentTheme = theme;
          break;
        }
        case Theme.Light: {
          this.isDay = true;
          this.isNight = false;
          this.currentTheme = theme;
          break;
        }
      }
    },
    toggleTheme() {
      switch (this.currentTheme) {
        case Theme.Dark: {
          ThemeUtil.setTheme(Theme.Light);
          ThemeUtil.fireThemeChanged();
          break;
        }
        case Theme.Light: {
          ThemeUtil.setTheme(Theme.Dark);
          ThemeUtil.fireThemeChanged();
          break;
        }
      }
    }
  },
};
</script>

<style scoped>
.container {
  width: 2rem;
  height: 2rem;
  background-color: var(--background-color);
  border-radius: 1rem;
  cursor: pointer;
  transition: 0.25s background-color;
}

.container svg {
  position: absolute;
  width: 20px;
  height: 20px;
  top: 6px;
  left: 6px;
}

.circle,
.moon {
  fill: none;
  stroke: var(--text-primary-color);
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 3px;
  transition: 0.25s stroke;
}

.line {
  fill: var(--text-primary-color);
  transition: 0.25s fill;
}

.icon {
  opacity: 0;
  transition: 0.25s opacity;
}

.active  {
  opacity: 1;
}
</style>
