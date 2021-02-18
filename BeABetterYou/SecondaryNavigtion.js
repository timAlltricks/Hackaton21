import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Trophees from './Screens/Trophees';
import Traitements from './Screens/Traitements';
import Communaute from './Screens/Communaute';
import Profile from './Screens/Profile';
import ScreenList from './Screens/ScreenList';

const Stack = createStackNavigator();

export default function SecondaryNavigation() {
  return (
    <Stack.Navigator initialRouteName="ScreenList">
      <Stack.Screen name="ScreenList" component={ScreenList} />
      <Stack.Screen name="Trophees" component={Trophees} />
      <Stack.Screen name="Traitements" component={Traitements} />
      <Stack.Screen name="Communaute" component={Communaute} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}
