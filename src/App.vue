<!-- src/App.vue -->
<template>
  <div>
    <nav-bar />
    <router-view />
    <HomePage />
  </div>
</template>

<script>
// import NavBar from './components/NavBar.vue';
// import HomePage from './views/HomePage.vue';

export default {
  name: 'App',
  // components: { HomePage }
};
</script>

<style>
@import '../src/assets/main.css'
</style>