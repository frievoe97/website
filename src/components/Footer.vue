<template>
  <footer class="bg-gray-900 text-white py-8">
    <div class="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div>
        <h4 class="text-xl font-semibold mb-4">Dein Unternehmen</h4>
        <p>&copy; 2023 Dein Unternehmen</p>
        <p>Adresse, PLZ Stadt, Land</p>
        <!-- Weitere Impressum-Informationen hier -->
      </div>
      <div class="md:ml-8">
        <h4 class="text-xl font-semibold mb-4">Links</h4>
        <ul class="md:space-y-2">
          <li @click="scrollToProjectPage">
            <a href="#">Projekte</a>
          </li>
          <li @click="scrollToAboutMePage">
            <a href="#">About Me</a>
          </li>
          <li @click="scrollToContactPage">
            <a href="#">Kontakt</a>
          </li>
          <!-- Weitere Navigationslinks hier -->
        </ul>
      </div>
      <div class="md:ml-8">
        <h4 class="text-xl font-semibold mb-4">Rechtliches</h4>
        <ul class="md:space-y-2">
          <li>
            <a href="#">Datenschutz</a>
          </li>
          <li>
            <a href="#">AGB</a>
          </li>
          <!-- Weitere rechtliche Links hier -->
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  methods: {
    scrollToStartPage() {
      this.$scrollTo("#start-page", 500, {
        offset: -60, // Offset, um den Pfeil nicht zu überdecken (kann angepasst werden)
      });
    },
    scrollToProjectPage() {
      this.$scrollTo("#project-page", 500, {
        offset: -60, // Offset, um den Pfeil nicht zu überdecken (kann angepasst werden)
      });
    },
    scrollToContactPage() {
      this.$scrollTo("#contact-page", 500, {
        offset: -60, // Offset, um den Pfeil nicht zu überdecken (kann angepasst werden)
      });
    },
    scrollToAboutMePage() {
      this.$scrollTo("#about-me-page", 500, {
        offset: -60, // Offset, um den Pfeil nicht zu überdecken (kann angepasst werden)
      });
    },
  },
};
</script>

<style>
/* Footer-Stile mit Tailwind CSS */
</style>
