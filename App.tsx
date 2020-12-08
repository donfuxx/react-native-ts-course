import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import SearchScreen from './src/screens/SearchScreen';

const AppStack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator>
        <AppStack.Screen
          options={{title: 'Property Finder'}}
          name="Search"
          component={SearchScreen}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
