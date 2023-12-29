import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { createI18n } from 'vue-i18n';
import { messages } from './lang/messages';

export const i18n = createI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages
})

createApp(App).use(i18n).mount('#app')
