<!-- src/components/HomePage.vue -->
<template>
  <div class="home-page">
    <main class="hero">
        <nav-bar />
      <section class="section">
        <div class="hero-text">
          <h1>So, you want to travel to <span>Space</span></h1>
          <p>
            Let’s face it; if you want to go to space, you might as well genuinely go to outer space
            and not hover kind of on the edge of it. Well sit back, and let us take you on a journey
            you’ll never forget!
          </p>
        </div>
        <div class="explore">
        <router-link to="/destination" class="explore-btn">Explore</router-link>
      </div>
    </section>
    </main>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
// import NavBar from '../components/NavBar.vue'
export default {
  name: 'HomePage',
  components: {
    NavBar
    // NavBar,
  },
}
</script>

<style scoped>
.hero {
  /* display: flex; */
  background: url('/public/assets/home/background-home-desktop.jpg') no-repeat center center/cover;
  flex-direction: column;
  /* align-items: center; */
  text-align: center;
  min-height: 100vh;
  /* padding: 2rem; */
  /* max-width: 1200px; */
  /* margin: 0 auto; */
  /* margin-top: 50px; */
}

.hero-text h1 {
  font-size: 2rem;
}

.hero-text h1 span {
  display: block;
  font-size: 4rem;
}

.hero-text p {
  color: #d0d6f9;
  max-width: 50ch;
  line-height: 1.6;
}

.explore-btn {
  display: block;
  background: #fff;
  color: #0b0d17;
  border-radius: 50%;
  width: 150px;
  height: 150px;
  line-height: 150px;
  /* text-align: center; */
  text-transform: uppercase;
  font-size: 1.5rem;
  /* margin: 50px auto; */
}

.explore-btn:hover {
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
}</style>