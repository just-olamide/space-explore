<!-- src/components/NavBar.vue -->
<template>
  <header>
    <nav>
        <div class="logo">
             <img src="/public/assets/shared/logo.svg">
        </div>
        <div class="line">
      <router-link to="/" :class="{ active: $route.name === 'Home' }">Home</router-link>
      <router-link to="/destination" :class="{ active: $route.name === 'Destination' }">Destination</router-link>
      <router-link to="/crew" :class="{ active: $route.name === 'Crew' }">Crew</router-link>
      <router-link to="/technology" :class="{ active: $route.name === 'Technology' }">Technology</router-link>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'NavBar'
};
</script>