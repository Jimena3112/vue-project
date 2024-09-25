import './assets/main.css'

import { createApp } from 'vue';
import App from './app.vue';
import Aura from '@primevue/themes/aura';
import PrimeVue from 'primevue/config'
import Card from "primevue/card";
import Button from "primevue/button";

const app = createApp(App);

// Router
// app.use(router);

// PrimeVue
app.use(PrimeVue, {
        ripple: true,
        theme: {
            preset: Aura,
            darkModeSelector: 'System',
            cssLayer: false
        }
    }
)
    .component('pv-button', Button)
    .component('pv-card', Card)

// Mount App
app.mount('#app');
