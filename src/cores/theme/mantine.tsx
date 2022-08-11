import { useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

export const useMantine = () => {
  const theme = useMantineTheme();
  const XS = useMediaQuery(breakpoint.xs, false);
  const SM = useMediaQuery(breakpoint.sm, false);
  const MD = useMediaQuery(breakpoint.md, false);
  const LG = useMediaQuery(breakpoint.lg, false);
  const XL = useMediaQuery(breakpoint.xl, false);
  const XXL = useMediaQuery(breakpoint.xxl, false);

  const mantine = {
    theme: theme,
    display: {
      XS,
      SM,
      MD,
      LG,
      XL,
      XXL,
    },
  };
  return {
    mantine,
  };
};

// min-width
export const display = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400,
};

const breakpoint = {
  xs: `(min-width: ${display.xs}px)`,
  sm: `(min-width: ${display.sm}px)`,
  md: `(min-width: ${display.md}px)`,
  lg: `(min-width: ${display.lg}px)`,
  xl: `(min-width: ${display.xl}px)`,
  xxl: `(min-width: ${display.xxl}px)`,
};
