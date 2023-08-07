<template>
  <nav
    :class="{
      'bg-white': !darkMode,
      'bg-gray-900': darkMode,
    }"
    class="fixed top-0 left-0 right-0 p-4 shadow-lg flex justify-between items-center"
  >
    <!-- Logo oder Titel -->
    <div
      :class="{ 'text-black': !darkMode, 'text-white': darkMode }"
      class="text-xl font-semibold"
      @click="scrollToStartPage"
    >
      Friedrich Völkers
    </div>

    <div class="flex space-x-4 items-center">
      <!-- Menüpunkte -->
      <ul class="flex space-x-4">
        <li @click="scrollToStartPage">
          <a :class="{ 'text-black': !darkMode, 'text-white': darkMode }"
            >Home</a
          >
        </li>
        <li @click="scrollToProjectPage">
          <a :class="{ 'text-black': !darkMode, 'text-white': darkMode }"
            >Projekte</a
          >
        </li>
        <li @click="scrollToContactPage">
          <a :class="{ 'text-black': !darkMode, 'text-white': darkMode }"
            >Contact</a
          >
        </li>
        <li @click="scrollToAboutMePage">
          <a :class="{ 'text-black': !darkMode, 'text-white': darkMode }"
            >About Me</a
          >
        </li>
      </ul>

      <!-- Buttons -->
      <div class="flex space-x-4 items-center relative">
        <font-awesome-icon
          icon="circle-half-stroke"
          class="text-xl cursor-pointer"
          @click="toggleDarkMode"
          v-bind:style="[darkMode ? { color: '#ffffff' } : {}]"
        />
        <font-awesome-icon
          icon="language"
          class="text-xl cursor-pointer"
          @click="toggleLanguageDropdown"
          v-bind:style="[darkMode ? { color: '#ffffff' } : {}]"
        />
        <!-- Dropdown-Menü für Sprachauswahl -->
        <transition name="fade">
          <div
            v-if="showLanguageDropdown"
            class="absolute top-10 right-0 mt-2 bg-white dark:bg-gray-900 rounded shadow-lg"
          >
            <ul class="py-2 px-4">
              <li
                v-for="language in languages"
                :key="language.code"
                :class="{
                  'text-black': !darkMode,
                  'text-white': darkMode,
                  'bg-gray-200 dark:bg-gray-800': isLanguageSelected(
                    language.code
                  ),
                }"
                @click="selectLanguage(language.code)"
                @mouseenter="hoveredLanguage = language.code"
                @mouseleave="hoveredLanguage = null"
              >
                {{ language.name }}
              </li>
            </ul>
          </div>
        </transition>
      </div>
    </div>
  </nav>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  data() {
    return {
      isGerman: false,
      showLanguageDropdown: false,
      languages: [
        { code: "de", name: "Deutsch" },
        { code: "en", name: "English" },
      ],
      selectedLanguage: "de", // Standardmäßig Deutsch ausgewählt
      hoveredLanguage: null, // Aktuell gehoverte Sprache
    };
  },
  computed: {
    darkMode() {
      return this.$store.state.darkMode;
    },
  },
  methods: {
    toggleDarkMode() {
      this.$store.commit("setDarkMode", !this.darkMode);
    },
    toggleLanguageDropdown() {
      this.showLanguageDropdown = !this.showLanguageDropdown;
    },
    selectLanguage(languageCode) {
      this.selectedLanguage = languageCode;
      this.showLanguageDropdown = false;
      this.$store.commit("setSelectedLanguage", languageCode); // Speichern der ausgewählten Sprache im Store
    },
    isLanguageSelected(languageCode) {
      return this.selectedLanguage === languageCode;
    },
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
/* Hinzufügen von benutzerdefinierten CSS-Stilen hier, falls erforderlich */
nav {
  z-index: 10;
}

/* Fade-Transition für das Dropdown-Menü */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
