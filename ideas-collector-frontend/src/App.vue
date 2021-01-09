<template>
  <div id="app-container">
    <div id="app">
      <router-view/>
    </div>
  </div>
</template>

<script lang="ts">
import ThemeUtil from './utils/theme-util';

enum Theme {
    Dark,
    Light
}

ThemeUtil.attachThemeChanged((theme: Theme) => {
  let themeId = '';

  switch (theme) {
    case Theme.Dark: {
      themeId = 'dark-theme';
      break;
    }
    case Theme.Light: {
      themeId = 'light-theme';
      break;
    }
    default: {
      break;
    }
  }

  const appContainer = document.getElementById('app-container');

  if (appContainer) {
    appContainer.className = '';
    appContainer.classList.add(themeId);
  }
});

setTimeout(() => {
  ThemeUtil.fireThemeChanged();
}, 200);

export default {};
</script>

<style>
@import url("https://use.typekit.net/tdp2jxu.css");

:root {
  --heading-1-size: 2rem;
  --heading-2-size: 1.5rem;
  --heading-3-size: 1.25rem;
  --paragraph-size: 1rem;
  --small-text-size: 0.75rem;
  --tiny-text-size: 0.5rem;

  --heading-1-weight: 400;
  --heading-2-weight: 400;
  --heading-3-weight: 400;
  --paragraph-weight: 200;
  --small-text-weight: 200;
  --tiny-text-weight: 200;
}

.dark-theme {
  --background-color: #222222;
  --primary-color: #DB2B30;
  --secondary-color: #45BB45;
  --text-primary-color: #FFFFFF;
  --text-secondary-color: #808080;
  --block-background-color: #333333;
}

.light-theme {
  --primary-color: #DB2B30;
  --secondary-color: #45BB45;
  --text-primary-color: #222222;
  --text-secondary-color: #808080;
  --block-background-color: #DDDDDD;
  --background-color: #FFFFFF;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: sofia-pro, sans-serif;
  font-weight: 200;
  font-style: normal;
}

html,
body,
#app,
#app-container {
  width: 100%;
  height: 100%;
}

#app-container {
  background-color: var(--background-color);
  transition: 0.25s background-color;
}

.page-container {
  width: 1136px;
  margin: 0 auto;
  padding: 2rem 0;
}

.col-1 {
  width: 5rem;
}

.col-2 {
  width: 11rem;
}

.col-3 {
  width: 17rem;
}

.col-4 {
  width: 23rem;
}

.col-5 {
  width: 29rem;
}

.col-6 {
  width: 35rem;
}

.col-7 {
  width: 41rem;
}

.col-8 {
  width: 47rem;
}

.col-9 {
  width: 53rem;
}

.col-10 {
  width: 59rem;
}

.col-11 {
  width: 65rem;
}

.col-12 {
  width: 71rem;
}

.round {
  border-radius: 0.5rem;
}
</style>
