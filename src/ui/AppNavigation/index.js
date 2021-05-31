import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainFlow from './MainFlow';

function AppNavigation() {
  return (
    <NavigationContainer>
      <MainFlow />
    </NavigationContainer>
  );
}

export default AppNavigation;
