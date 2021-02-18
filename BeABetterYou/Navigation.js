import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Accueil from './Screens/Accueil';
import Actualites from './Screens/Actualites';
import AddAddiction from './Screens/AddAddiction';
import SecondaryNavigation from './SecondaryNavigtion';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
      <Tab.Navigator>
        <Tab.Screen name="Accueil" component={Accueil} />
        <Tab.Screen name="Actualites" component={Actualites} />
        <Tab.Screen name="addAddiction" component={AddAddiction} />
        <Tab.Screen name="SecondaryNavigation" component={SecondaryNavigation} />
      </Tab.Navigator>
  );
}
