export const breakpoints = {
  xs: 480,
  sm: 768,
  // md: 992,
  lg: 1280,
  elg: 1440,
};

export const device = {
  mobile: `(min-width: ${breakpoints.xs}px)`,
  tablet: `(min-width: ${breakpoints.sm}px)`,
  // laptop: `(min-width: ${breakpoints.md}px)`,
  desktop: `(min-width: ${breakpoints.lg}px)`,
  desktopBig: `(min-width: ${breakpoints.elg}px)`,
};
