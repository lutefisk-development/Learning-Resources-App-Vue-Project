import { createApp } from 'vue';
import App from './App.vue';
import BaseCard from './components/UI/BaseCard.vue';

const app = createApp(App);

// Register global components, can be used everywhere in the app
app.component('base-card', BaseCard);

// Mount the app to the selector
app.mount('#app');
