import { createGlobalTheme } from '@vanilla-extract/css';

import { themeColor } from '../colors/colors';
import { radius } from '../effects/radius';
import { shadows } from '../effects/shadows';
import { spacing } from '../layout/spacing';
import { fontSize, fontWeight, lineHeight } from '../typography/fonts';
import { themeLayer, vars } from './contract.css';

const baseTheme = {
  '@layer': themeLayer,
  spacing: {
    xs: `${spacing[2]}px`,
    sm: `${spacing[4]}px`,
    md: `${spacing[6]}px`,
    lg: `${spacing[8]}px`,
    xl: `${spacing[12]}px`,
  },
  typography: {
    fontFamily: 'Pretendard, system-ui, sans-serif',
    fontSize: {
      '050': `${fontSize[12]}px`,
      '100': `${fontSize[14]}px`,
      '200': `${fontSize[16]}px`,
      '300': `${fontSize[18]}px`,
      '400': `${fontSize[20]}px`,
      '500': `${fontSize[24]}px`,
      '600': `${fontSize[28]}px`,
      '700': `${fontSize[32]}px`,
      '800': `${fontSize[36]}px`,
      '900': `${fontSize[48]}px`,
    },
    lineHeight: {
      regular: `${lineHeight.regular}`,
      compact: `${lineHeight.compact}`,
    },
    fontWeight: {
      regular: `${fontWeight.regular}`,
      medium: `${fontWeight.medium}`,
      semiBold: `${fontWeight.semiBold}`,
      bold: `${fontWeight.bold}`,
    },
  },
  shadows: {
    none: `${shadows.none}`,
    sm: `${shadows.sm}`,
    md: `${shadows.md}`,
    lg: `${shadows.lg}`,
    xl: `${shadows.xl}`,
    '2xl': `${shadows['2xl']}`,
  },
  radius: {
    none: `${radius.none}`,
    sm: `${radius.sm}`,
    md: `${radius.md}`,
    lg: `${radius.lg}`,
    xl: `${radius.xl}`,
    full: `${radius.full}`,
  },
};

export const defaultTheme = createGlobalTheme(':root', vars, {
  ...baseTheme,
  color: themeColor['4th'],
  mode: 'light',
  theme: '4th',
});

// TODO: 다크 모드 추가 필요
// export const darkTheme1st = createGlobalTheme('[data-theme="1st"][data-mode="dark"]', vars, {
//   ...baseTheme,
//   color: {
//     primary: themeColor['1st'].primary,
//     secondary: themeColor['1st'].secondary,
//     background: themeColor['1st'].background,
//     text: themeColor['1st'].text,
//     gradient: themeColor['1st'].gradient,
//   },
//   mode: 'dark',
//   theme: '1st',
// });
