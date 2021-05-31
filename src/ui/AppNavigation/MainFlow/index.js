import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { translate } from 'react-i18next';

import SettingsStack from '../SettingsStack';
import HomeStack from '../HomeStack';

/* eslint-disable no-unused-vars */
import I18n from 'i18next';
import i18n from '../../../I18n';
/* eslint-enable no-unused-vars */

const Drawer = createDrawerNavigator();
function MainFlow() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeStack} />
      <Drawer.Screen name="Settings" component={SettingsStack} />
    </Drawer.Navigator>
  );
}

const WrappedMainFlow = ({ t }) => <MainFlow screenProps={{ t }} />;
const LanguageResponsiveMainFlow = translate('common', {
  bindI18n: 'languageChanged',
  bindStore: false,
})(WrappedMainFlow);

export default LanguageResponsiveMainFlow;
