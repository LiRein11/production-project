import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
    lng: 'ru',
    fallbackLng: 'ru',

    interpolation: {
        escapeValue: false, // not needed for react!!
    },

    resources: { ru: { translationsNS: {} } },
}); // Для тестов чтобы useTranslation не жаловался

export default i18n;
