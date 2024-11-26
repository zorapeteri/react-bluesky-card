import { BlueskyCardColors, BlueskyCardTheme } from 'themes';

const colorPrefix = '--bluesky-card-';

const getCSSVariables = (
  colors: BlueskyCardColors,
  theme: BlueskyCardTheme
) => ({
  ...Object.keys(theme).reduce(
    (a, b) => ({ ...a, [`${colorPrefix}${b}`]: (theme as any)[b] }),
    {}
  ),
  ...Object.keys(colors)
    .filter((key) => Object.keys(theme).includes(key))
    .reduce(
      (a, b) => ({ ...a, [`${colorPrefix}${b}`]: (colors as any)[b] }),
      {}
    ),
});

export default getCSSVariables;
