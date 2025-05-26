<!-- src/components/DestinationPage.vue -->
<template>
  <div class="destination-page">
    <nav-bar />
    <main>
      <h1><span>01</span> Pick your destination</h1>
      <section class="destination-container">
        <div class="destination-image">
          <picture>
            <source :srcset="selectedDestination?.images.webp" type="image/webp">
            <img :src="selectedDestination?.images.png" :alt="selectedDestination?.name">
          </picture>
        </div>
        <div class="destination-content">
          <nav class="tabs" role="tablist">
            <button
              v-for="destination in destinations"
              :key="destination.name"
              class="tab"
              :data-name="destination.name"
              :aria-selected="selectedDestination?.name === destination.name"
              @click="selectDestination(destination)"
            >
              {{ destination.name }}
            </button>
          </nav>
          <h2>{{ selectedDestination?.name }}</h2>
          <p>{{ selectedDestination?.description }}</p>
          <div class="destination-meta">
            <div>
              <h3>Avg. Distance</h3>
              <p>{{ selectedDestination?.distance }}</p>
            </div>
            <div>
              <h3>Est. Travel Time</h3>
              <p>{{ selectedDestination?.travel }}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import NavBar from './NavBar.vue';
export default {
  components: { NavBar },
  name: 'DestinationPage',
  data() {
    return {
      destinations: [],
      selectedDestination: null,
      error: null
    };
  },
  async created() {
    try {
      const response = await fetch('/data.json');
      if (!response.ok) throw new Error('Failed to fetch data');
      const data = await response.json();
      this.destinations = data.destinations;
      this.selectedDestination = data.destinations[0]; 
    } catch (error) {
      this.error = 'Error loading data. Please try again later.';
    }
  },
  methods: {
    selectDestination(destination) {
      this.selectedDestination = destination;
    }
  }
};
</script>