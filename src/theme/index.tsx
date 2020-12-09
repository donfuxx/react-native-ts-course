import React, { createContext } from 'react';
import { ITheme, ThemeType } from './types';
import getTheme from './themes';

interface IThemeContext {
  theme: ITheme;
}

interface IThemeProviderProps {
  theme: ThemeType;
  children: any;
}

export const ThemeContext = createContext({} as IThemeContext);

export const ThemeProvider = (props: IThemeProviderProps) => {
  const { children, theme } = props;

  return (
    <ThemeContext.Provider value={{ theme: getTheme(theme) }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
