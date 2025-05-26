<!-- src/components/CrewPage.vue -->
<template>
  <div class="crew-page">
    <nav-bar />
    <main>
      <h1><span>02</span> Meet your crew</h1>
      <section class="crew-container">
        <div class="crew-content">
          <h3>{{ selectedCrew?.role }}</h3>
          <h2>{{ selectedCrew?.name }}</h2>
          <p>{{ selectedCrew?.bio }}</p>
          <nav class="crew-tabs" role="tablist">
            <button
              v-for="crew in crewMembers"
              :key="crew.name"
              class="crew-tab"
              :data-name="crew.name"
              :aria-selected="selectedCrew?.name === crew.name"
              @click="selectCrew(crew)"
            ></button>
          </nav>
        </div>
        <div class="crew-image">
          <picture>
            <source :srcset="selectedCrew?.images.webp" type="image/webp">
            <img :src="selectedCrew?.images.png" :alt="selectedCrew?.name">
          </picture>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import NavBar from './NavBar.vue';
export default {
  components:{
    NavBar
  },
  name: 'CrewPage',
  data() {
    return {
      crewMembers: [],
      selectedCrew: null,
      error: null
    };
  },
  async created() {
    try {
      const response = await fetch('/data.json');
      if (!response.ok) throw new Error('Failed to fetch data');
      const data = await response.json();
      this.crewMembers = data.crew;
      this.selectedCrew = data.crew[0]; // Default to Douglas Hurley
    } catch (error) {
      this.error = 'Error loading data. Please try again later.';
    }
  },
  methods: {
    selectCrew(crew) {
      this.selectedCrew = crew;
    }
  }
};
</script>