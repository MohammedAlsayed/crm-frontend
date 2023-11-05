import { createI18n } from 'vue-i18n/dist/vue-i18n';
import EN from '../locale/en.json';
import AR from '../locale/ar.json';


const i18n = createI18n({
    locale: document.cookie.split("=")[1], // set locale
    fallbackLocale: 'EN', // set fallback locale
    messages: {
        EN: EN,
        AR: AR,
    }, // set locale messages
  })

export default i18n;