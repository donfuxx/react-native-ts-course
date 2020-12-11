import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Routes from './src/navigation/routes';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import ThemeProvider from './src/theme';
import {ThemeType} from './src/theme/types';
import {Provider} from 'react-redux';
import {store} from './src/store';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <ThemeProvider theme={ThemeType.Primary}>
            <Routes />
          </ThemeProvider>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
