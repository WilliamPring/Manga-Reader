import 'react-native-gesture-handler';
import React from 'react';
import {
  MainBottomTabNavigator,
  ApplicationNavigatorRouter,
} from './Navigators';
// @ts-ignore
import openURLInBrowser from 'react-native/Libraries/Core/Devtools/openURLInBrowser';

const App = () => {
  return <MainBottomTabNavigator />;
};

export default App;
