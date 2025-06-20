// ? https://seek-oss.github.io/braid-design-system/css/responsiveStyle/

import { breakpoints } from '@sipe-team/tokens';
import type { StyleRule } from '@vanilla-extract/css';
import { mapValues } from './mapValues';

const { mobile: _, ...breakpointsAboveMobile } = breakpoints;
export const breakpointQuery = mapValues(breakpointsAboveMobile, (bp) => `screen and (min-width: ${bp}px)`);

const makeMediaQuery = (breakpoint: keyof typeof breakpointQuery) => (styles?: CSSProps) =>
  !styles || Object.keys(styles).length === 0
    ? {}
    : {
        [breakpointQuery[breakpoint]]: styles,
      };

const mediaQuery = {
  tablet: makeMediaQuery('tablet'),
  desktop: makeMediaQuery('desktop'),
  wide: makeMediaQuery('wide'),
};

type CSSProps = Omit<StyleRule, '@media' | '@supports'>;
interface ResponsiveStyle {
  mobile?: CSSProps;
  tablet?: CSSProps;
  desktop?: CSSProps;
  wide?: CSSProps;
}

export const responsiveStyle = ({ mobile, tablet, desktop, wide }: ResponsiveStyle): StyleRule => ({
  ...mobile,
  ...(tablet || desktop || wide
    ? {
        '@media': {
          ...mediaQuery.tablet(tablet ?? {}),
          ...mediaQuery.desktop(desktop ?? {}),
          ...mediaQuery.wide(wide ?? {}),
        },
      }
    : {}),
});
