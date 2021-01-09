enum Theme {
    Dark,
    Light
}

const DEFAULT_THEME = Theme.Dark;

const LOCAL_STORAGE_THEME_KEY = 'AppTheme';

const EventHandlers: Function[] = [];

const ThemeUtil = {
  Theme,

  getCurrentTheme(): Theme {
    const savedTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY);

    switch (savedTheme) {
      case 'dark': return Theme.Dark;
      case 'light': return Theme.Light;
      default: return DEFAULT_THEME;
    }
  },

  setTheme(theme: Theme): void {
    let themeId = '';

    switch (theme) {
      case Theme.Dark: {
        themeId = 'dark';
        break;
      }
      case Theme.Light: {
        themeId = 'light';
        break;
      }
      default: break;
    }

    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, themeId);
  },

  attachThemeChanged(fn: Function): void {
    EventHandlers.push(fn);
  },

  detachThemeChanged(fn: Function): void {
    const ind: number = EventHandlers.indexOf(fn);

    if (ind !== -1) {
      EventHandlers.splice(ind, 1);
    }
  },

  fireThemeChanged(): void {
    const currentTheme: Theme = ThemeUtil.getCurrentTheme();

    EventHandlers.forEach((fn) => fn(currentTheme));
  },
};

export default ThemeUtil;
