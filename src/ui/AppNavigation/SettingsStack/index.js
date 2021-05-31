import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Settings from '../../screens/Settings';

const Stack = createStackNavigator();
function SettingsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
}

export default SettingsStack;
