import { BlueskyCardColors, BlueskyCardTheme } from 'themes';
import { getRGB, rgba } from 'utils/colors';

const useBlurredBackground = (
  blurredBackground: boolean | undefined,
  colors: BlueskyCardColors | undefined,
  theme: BlueskyCardTheme
) => {
  if (blurredBackground) {
    const backgroundColor = colors?.background || theme.background;
    const rgb = getRGB(backgroundColor);
    if (rgb) {
      return {
        background: rgba(rgb, 0.6),
        backdropFilter: 'blur(8px)',
      };
    }
  }

  return {};
};

export default useBlurredBackground;
