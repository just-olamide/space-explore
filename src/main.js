// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
// import home from './views/HomePage.vue';
import router from './router';
import './assets/main.css';
import NavBar from './components/NavBar.vue';

const app = createApp(App);
app.component('nav-bar', NavBar);
app.use(router)
app.mount('#app');