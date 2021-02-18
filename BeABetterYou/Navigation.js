import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Acceuil, Actualites, AddAddiction, ScreenList } from './Screens';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Accueil" component={Acceuil} />
      <Tab.Screen name="Actualites" component={Actualites} />
      <Tab.Screen name="addAddiction" component={AddAddiction} />
      <Tab.Screen name="ScreenList" component={ScreenList} />
    </Tab.Navigator>
  );
}
