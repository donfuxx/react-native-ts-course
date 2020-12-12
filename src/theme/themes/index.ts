import {ITheme, ThemeType} from '../../theme/types';
import PrimaryTheme from './primary';

const themes = new Map<ThemeType, ITheme>();
themes.set(ThemeType.Primary, PrimaryTheme);

const getTheme = (theme: ThemeType): ITheme => {
  const currTheme = themes.get(theme);
  if (!currTheme) {
    throw new Error(`Theme ${theme} does not exist`);
  }
  return currTheme;
};

export default getTheme;
