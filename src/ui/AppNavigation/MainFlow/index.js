import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import SettingsStack from '../SettingsStack';
import HomeStack from '../HomeStack';

const Drawer = createDrawerNavigator();
function MainFlow() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeStack} />
      <Drawer.Screen name="Settings" component={SettingsStack} />
    </Drawer.Navigator>
  );
}

export default MainFlow;
