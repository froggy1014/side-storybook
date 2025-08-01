// Base color palette (primitive colors)
export const color = {
  black: '#131518',
  white: '#ffffff',

  gray50: '#fafafa',
  gray100: '#f4f4f5',
  gray200: '#e4e4e7',
  gray300: '#d4d4d8',
  gray400: '#a1a1aa',
  gray500: '#71717a',
  gray600: '#52525b',
  gray700: '#3f3f46',
  gray800: '#27272a',
  gray900: '#18181b',
  gray950: '#111111',

  red50: '#fef2f2',
  red100: '#fee2e2',
  red200: '#fecaca',
  red300: '#fca5a5',
  red400: '#f87171',
  red500: '#ef4444',
  red600: '#dc2626',
  red700: '#991919',
  red800: '#511111',
  red900: '#300c0c',
  red950: '#1f0808',

  orange50: '#fff7ed',
  orange100: '#ffedd5',
  orange200: '#fed7aa',
  orange300: '#fdba74',
  orange400: '#fb923c',
  orange500: '#f97316',
  orange600: '#ea580c',
  orange700: '#92310a',
  orange800: '#6c2710',
  orange900: '#3b1106',
  orange950: '#220a04',

  yellow50: '#fefce8',
  yellow100: '#fef9c3',
  yellow200: '#fef08a',
  yellow300: '#fde047',
  yellow400: '#facc15',
  yellow500: '#eab308',
  yellow600: '#ca8a04',
  yellow700: '#845209',
  yellow800: '#713f12',
  yellow900: '#422006',
  yellow950: '#281304',

  green50: '#f0fdf4',
  green100: '#dcfce7',
  green200: '#bbf7d0',
  green300: '#86efac',
  green400: '#4ade80',
  green500: '#22c55e',
  green600: '#16a34a',
  green700: '#116932',
  green800: '#124a28',
  green900: '#042713',
  green950: '#03190c',

  teal50: '#f0fdfa',
  teal100: '#ccfbf1',
  teal200: '#99f6e4',
  teal300: '#5eead4',
  teal400: '#2dd4bf',
  teal500: '#14b8a6',
  teal600: '#0d9488',
  teal700: '#0c5d56',
  teal800: '#114240',
  teal900: '#032726',
  teal950: '#021716',

  blue50: '#eff6ff',
  blue100: '#dbeafe',
  blue200: '#bfdbfe',
  blue300: '#a3cfff',
  blue400: '#60a5fa',
  blue500: '#3b82f6',
  blue600: '#2563eb',
  blue700: '#173da6',
  blue800: '#1a3478',
  blue900: '#14204a',
  blue950: '#0c142e',

  cyan50: '#ecfeff',
  cyan100: '#cffafe',
  cyan200: '#a5f3fc',
  cyan300: '#00ffff',
  cyan400: '#22d3ee',
  cyan500: '#06b6d4',
  cyan600: '#0891b2',
  cyan700: '#0c5c72',
  cyan800: '#134152',
  cyan900: '#072a38',
  cyan950: '#051b24',

  purple50: '#faf5ff',
  purple100: '#f3e8ff',
  purple200: '#e9d5ff',
  purple300: '#d8b4fe',
  purple400: '#c084fc',
  purple500: '#a855f7',
  purple600: '#9333ea',
  purple700: '#641ba3',
  purple800: '#4a1772',
  purple900: '#2f0553',
  purple950: '#1a032e',

  pink50: '#fdf2f8',
  pink100: '#fce7f3',
  pink200: '#fbcfe8',
  pink300: '#f9a8d4',
  pink400: '#f472b6',
  pink500: '#ec4899',
  pink600: '#db2777',
  pink700: '#a41752',
  pink800: '#6d0e34',
  pink900: '#45061f',
  pink950: '#2c0514',
} as const;

export const semanticColor = {
  warning: color.orange400,
  danger: color.red500,
  positive: color.blue400,
} as const;

export interface ThemeColor {
  primary: string;
  secondary: string;
  background: string;
  text: string;
  gradient: string;
}

export const theme1st: ThemeColor = {
  primary: '#01fe13',
  secondary: '#01fe13',
  background: '#000000',
  text: color.white,
  gradient: 'linear-gradient(45deg, #01fe13 0%, #000000 100%)',
};

export const theme2nd: ThemeColor = {
  primary: '#03ff31',
  secondary: '#06ffe3',
  background: '#131518',
  text: color.white,
  gradient: 'linear-gradient(45deg, #03ff31 0%, #06ffe3 100%)',
};

export const theme3rd: ThemeColor = {
  primary: '#00ffff',
  secondary: '#00ff99',
  background: '#0d0d0d',
  text: color.white,
  gradient: 'linear-gradient(45deg, #00FFFF 0%, #00FF99 100%)',
};

export const theme4th: ThemeColor = {
  primary: '#f4a1a0',
  secondary: '#f4a1a0',
  background: '#0f1010',
  text: color.white,
  gradient: 'linear-gradient(45deg, #FF9595 0%, #FFE5B1 100%)',
};

export const themeColor = {
  '1st': theme1st,
  '2nd': theme2nd,
  '3rd': theme3rd,
  '4th': theme4th,
} as const;
