import { Platform, NativeModules } from 'react-native';
import i18n from 'i18next';
import { reactI18nextModule } from 'react-i18next';

/** Localization */
import ar from './ar.json';
import en from './en.json';
/** Localization */

const getDeviceLang = () => {
  const appLanguage =
    Platform.OS === 'ios'
      ? NativeModules.SettingsManager.settings.AppleLocale ||
        NativeModules.SettingsManager.settings.AppleLanguages[0]
      : NativeModules.I18nManager.localeIdentifier;

  return appLanguage.indexOf('_') !== -1
    ? appLanguage.slice(0, 2)
    : appLanguage;
};

/*---------------------------------
          LANGUAGE DETECTOR
---------------------------------*/
const languageDetector = {
  init: Function.prototype,
  type: 'languageDetector',
  async: true, // flags below detection to be async
  detect: (callback) => {
    const deviceLang = getDeviceLang();
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
