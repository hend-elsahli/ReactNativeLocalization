import React from 'react';
import { StyleSheet, View, Text, Button, I18nManager } from 'react-native';
import { withNamespaces } from 'react-i18next';
import i18n from 'i18next';
import RNRestart from 'react-native-restart';
import AsyncStorage from '@react-native-community/async-storage';

import { USER_LANG, getDeviceLang } from '../../../utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gutterBottom: {
    marginBottom: 8,
  },
  card: {
    backgroundColor: '#fff',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    marginBottom: 16,
  },
  content: {
    alignItems: 'flex-start',
  },
});

function Settings({ t, navigation }) {
  const onLangChange = async () => {
    const userLang = await AsyncStorage.getItem(USER_LANG);
    const lang = (userLang || getDeviceLang()) === 'ar' ? 'en' : 'ar';

    const isLangRTL = lang === 'ar';

    /** 1.  */
    await AsyncStorage.setItem(USER_LANG, lang);

    /** 2.  */
    await i18n.changeLanguage(lang);

    /** 3. */
    if (isLangRTL !== I18nManager.isRTL) {
      /** Change app direction */
      await I18nManager.allowRTL(isLangRTL);
      await I18nManager.forceRTL(isLangRTL);
      /** Force restart for the changes to take effect */
      RNRestart.Restart();
    }
  };

  const onMenuPress = () => {
    navigation.toggleDrawer();
  };

  const clearUserLang = async () => {
    await AsyncStorage.clear();
  };

  return (
    <View style={styles.container}>
      <View style={styles.gutterBottom}>
        <Button title={t('COMMON:OPEN_DRAWER')} onPress={onMenuPress} />
      </View>

      <View style={styles.card}>
        <View style={styles.content}>
          <Text>{t('COMMON:CARD_TITLE')}</Text>
          <Text>{t('COMMON:CARD_SUBTITLE')}</Text>
        </View>

        <Text>{t('COMMON:ICON')}</Text>
      </View>

      <View>
        <View style={styles.gutterBottom}>
          <Button title={t('COMMON:SWITCH_LANG')} onPress={onLangChange} />
        </View>

        <Button title={t('COMMON:CLEAR_USER_LANG')} onPress={clearUserLang} />
      </View>
    </View>
  );
}

export default withNamespaces(['COMMON'], { wait: true })(Settings);
