import light from './light';
import dark from './dark';
import dim from './dim';

export type BlueskyCardColors = {
  primary?: string;
  secondary?: string;
  accent?: string;
  muted?: string;
  background?: string;
  border?: string;
};

export type BlueskyCardTheme = Required<BlueskyCardColors>;

export type ThemeOption = 'light' | 'dark' | 'dim';

export default { light, dark, dim };
