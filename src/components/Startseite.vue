<template>
  <div id="start-page" :class="{ dark: darkMode, light: !darkMode }">
    <div
      class="flex flex-col justify-center items-center min-h-screen transition-all duration-300"
    >
      <!-- Hauptinhalt -->
      <div class="flex flex-col justify-center items-center flex-grow">
        <h1
          :class="{ 'text-black': !darkMode, 'text-white': darkMode }"
          class="text-4xl font-bold mb-4 px-8"
        >
          Hey! I'm Friedrich and a Full-Stack-Developer <br />
          Still in progress...
        </h1>
      </div>

      <!-- Pfeil und Unterschrift "Projekte" -->
      <div class="flex flex-col items-center mt-auto mb-8">
        <!-- Hier wurde mt-auto und mb-8 hinzugefügt -->
        <font-awesome-icon
          icon="arrow-down"
          class="text-gray-800 dark:text-white text-3xl mb-2"
          @click="scrollToProjectPage"
        />
        <span
          :class="{ 'text-black': !darkMode, 'text-white': darkMode }"
          class="text-lg"
          >Projekte</span
        >
      </div>
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
  methods: {
    scrollToProjectPage() {
      this.$scrollTo("#project-page", 500, {
        offset: -60, // Offset, um den Pfeil nicht zu überdecken (kann angepasst werden)
      });
    },
  },
};
</script>

<style>
/* Hinzufügen von benutzerdefinierten CSS-Stilen hier, falls erforderlich */
</style>
