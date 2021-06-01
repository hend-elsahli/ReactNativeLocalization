import { I18nManager } from 'react-native';
import RNRestart from 'react-native-restart';
import i18n from 'i18next';
import { reactI18nextModule } from 'react-i18next';
import AsyncStorage from '@react-native-community/async-storage';

import { USER_LANG, getDeviceLang } from '../utils';

/** Localization */
import ar from './ar.json';
import en from './en.json';
/** Localization */

/*---------------------------------
          LANGUAGE DETECTOR
---------------------------------*/
const languageDetector = {
  init: Function.prototype,
  type: 'languageDetector',
  async: true, // flags below detection to be async
  detect: async (callback) => {
    const userLang = await AsyncStorage.getItem(USER_LANG);

    const deviceLang = userLang || getDeviceLang();
    const isLangRTL = deviceLang === 'ar';
    if (isLangRTL !== I18nManager.isRTL) {
      await I18nManager.allowRTL(isLangRTL);
      await I18nManager.forceRTL(isLangRTL);
      RNRestart.Restart();
    }
    callback(deviceLang);
  },
  cacheUserLanguage: () => {},
};

/*---------------------------------
            I18N CONFIG
---------------------------------*/
i18n
  .use(languageDetector)
  .use(reactI18nextModule)
  .init({
    fallbackLng: 'en',
    resources: {
      ar,
      en,
    },

    // have a common namespace used around the full app
    ns: ['common'],
    defaultNS: 'common',

    debug: true,

    //   cache: {
    //  enabled: true
    // },

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
