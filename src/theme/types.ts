export enum ThemeType {
  Primary = 'primary',
}

export interface ThemeColors {
  blue: string;
  grey: string;
}

export interface ITheme {
  colors: ThemeColors;
}
