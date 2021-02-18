import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Accueil from './Screens/Accueil';
import Actualites from './Screens/Actualites';
import AddAddiction from './Screens/AddAddiction';
import ScreenList from './Screens/ScreenList';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Accueil" component={Accueil} />
      <Tab.Screen name="Actualites" component={Actualites} />
      <Tab.Screen name="addAddiction" component={AddAddiction} />
      <Tab.Screen name="ScreenList" component={ScreenList} />
    </Tab.Navigator>
  );
}
