import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Routes from './src/navigation/routes';

const App = () => {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
};

export default App;
