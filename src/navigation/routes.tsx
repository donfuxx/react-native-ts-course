import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import SearchScreen from '../screens/SearchScreen';
import SearchResultsScreen from '../screens/SearchResults';
import {Destination} from './types/Destination';
import {AppStackParamList} from './types/RouteParams';

const AppStack = createStackNavigator<AppStackParamList>();

const Routes = () => {
  return (
    <AppStack.Navigator>
      <AppStack.Screen
        options={{title: 'Property Finder'}}
        name={Destination.Search}
        component={SearchScreen}
      />
      <AppStack.Screen
        options={{title: 'Search Results'}}
        name={Destination.SearchResults}
        component={SearchResultsScreen}
      />
    </AppStack.Navigator>
  );
};

export default Routes;
