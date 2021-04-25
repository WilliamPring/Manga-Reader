import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { MangaCollection } from '../Containers/MangaCollection';
import { SafeAreaView, StatusBar } from 'react-native';
const Stack = createStackNavigator();

export const ApplicationNavigatorRouter = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="TabNavigation"
          component={MangaCollection}
          options={{}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
