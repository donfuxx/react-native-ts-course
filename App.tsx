import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Routes from './src/navigation/routes';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import ThemeProvider from './src/theme';
import {ThemeType} from './src/theme/types';

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <ThemeProvider theme={ThemeType.Primary}>
          <Routes />
        </ThemeProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
