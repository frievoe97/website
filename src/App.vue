<script setup>
import Startseite from "./components/Startseite.vue";
import Projekte from "./components/Projekte.vue";
import Footer from "./components/Footer.vue";
import KontaktFormular from "./components/KontaktFormular.vue";
import AboutMe from "./components/AboutMe.vue";
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <div :class="{ dark: darkMode }">
    <div class="bg-gray-100 dark:bg-gray-800">
      <Navbar />
      <Startseite />
      <Projekte />
      <KontaktFormular />
      <AboutMe />
      <Footer />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    darkMode() {
      return this.$store.state.darkMode; // Zugriff auf den darkMode-Wert aus dem Store
    },
  },
};
</script>

<style scoped></style>
