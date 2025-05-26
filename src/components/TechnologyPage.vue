<!-- src/components/TechnologyPage.vue -->
<template>
  <div class="technology-page">
    <nav-bar />
    <main>
      <h1><span>03</span> Space launch 101</h1>
      <section class="technology-container">
        <div class="technology-content">
          <nav class="tech-tabs" role="tablist">
            <button
              v-for="(tech, index) in technologies"
              :key="tech.name"
              class="tech-tab"
              :data-name="tech.name"
              :aria-selected="selectedTech?.name === tech.name"
              @click="selectTech(tech)"
            >
              {{ index + 1 }}
            </button>
          </nav>
          <h3>The terminology...</h3>
          <h2>{{ selectedTech?.name }}</h2>
          <p>{{ selectedTech?.description }}</p>
        </div>
        <div class="technology-image">
          <picture>
            <source :srcset="selectedTech?.images.portrait" type="image/webp">
            <source :srcset="selectedTech?.images.landscape" media="(max-width: 767px)">
            <source :srcset="selectedTech?.images.portrait">
            <img :src="selectedTech?.images.portrait" :alt="selectedTech?.name">
          </picture>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: 'TechnologyPage',
  data() {
    return {
      technologies: [],
      selectedTech: null,
      error: null
    };
  },
  async created() {
    try {
      const response = await fetch('/data.json');
      if (!response.ok) throw new Error('Failed to fetch data');
      const data = await response.json();
      this.technologies = data.technology;
      this.selectedTech = data.technology[0]; // Default to Launch vehicle
    } catch (error) {
      this.error = 'Error loading data. Please try again later.';
    }
  },
  methods: {
    selectTech(tech) {
      this.selectedTech = tech;
    }
  }
};
</script>