import { createTheming } from 'react-color-theme';

export const [ThemeProvider, useTheme, themes] = createTheming(
  {
    purple: '#126B8A',
    dark_purple: '#754EAA',
    blue: '#5CB8F7',
    dark_blue: '#448DBF',
    red: '#DC2228',
    light_blue: 'rgba(92, 184, 247, .6)',
    light_red: 'rgba(220, 34, 40, .2)',
    light_gray: 'rgba(180, 180, 180, .1)',
  },
  {
    dark: {
      // background: '#282836',
      // foreground: '#3e3e4a',
      // text: '#fff',
    },
    light: {
      // background: '#fff',
      // foreground: '#eee',
      // text: '#333',
    },
  }
);
