<template>
  <nav
    :class="{
      'bg-white': !darkMode,
      'bg-gray-900': darkMode,
    }"
    class="fixed top-0 left-0 right-0 p-4 shadow-lg flex flex-col md:flex-row justify-between items-center"
  >
    <!-- Logo oder Titel -->
    <div
      :class="{
        'mb-1': isMobile,
      }"
      class="text-xl font-semibold"
    >
      <span
        :class="{ 'text-black': !darkMode, 'text-white': darkMode }"
        @click="scrollToStartPage"
      >
        Friedrich Völkers
      </span>
    </div>

    <!-- Menü und Buttons -->
    <div
      v-if="showMenu"
      :class="{
        'space-x-0': isMobile,
        'space-x-4': !isMobile,
      }"
      class="md:mt-0 md:flex items-center"
    >
      <!-- Menüpunkte -->
      <ul
        :class="{
          'text-black': !darkMode,
          'text-white': darkMode,
          'space-x-0': isMobile,
          'space-x-4': !isMobile,
        }"
        class="flex flex-col md:flex-row space-x-4"
      >
        <li
          @click="scrollToStartPage"
          :class="{
            'text-black': !darkMode,
            'text-white': darkMode,
            'mb-1': isMobile,
          }"
          class="flex items-center justify-center"
        >
          <a :class="{ 'text-black': !darkMode, 'text-white': darkMode }"
            >Home</a
          >
        </li>
        <li
          @click="scrollToProjectPage"
          :class="{
            'text-black': !darkMode,
            'text-white': darkMode,
            'mb-1': isMobile,
          }"
          class="flex items-center justify-center"
        >
          <a :class="{ 'text-black': !darkMode, 'text-white': darkMode }"
            >Projekte</a
          >
        </li>
        <li
          @click="scrollToContactPage"
          :class="{
            'text-black': !darkMode,
            'text-white': darkMode,
            'mb-1': isMobile,
          }"
          class="flex items-center justify-center"
        >
          <a :class="{ 'text-black': !darkMode, 'text-white': darkMode }"
            >Contact</a
          >
        </li>
        <li
          @click="scrollToAboutMePage"
          :class="{
            'text-black': !darkMode,
            'text-white': darkMode,
            'mb-1': isMobile,
          }"
          class="flex items-center justify-center"
        >
          <a :class="{ 'text-black': !darkMode, 'text-white': darkMode }"
            >About Me</a
          >
        </li>
      </ul>

      <!-- Buttons -->
      <div
        :class="{
          'space-x-0': isMobile,
          'space-x-4': !isMobile,
        }"
        class="items-center relative flex justify-around"
      >
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
            <!-- ... -->
          </div>
        </transition>
      </div>
    </div>
  </nav>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  components: {
    FontAwesomeIcon,
  },
  data() {
    return {
      isGerman: false,
      showLanguageDropdown: true,
      languages: [
        { code: "de", name: "Deutsch" },
        { code: "en", name: "English" },
      ],
      selectedLanguage: "de", // Standardmäßig Deutsch ausgewählt
      hoveredLanguage: null, // Aktuell gehoverte Sprache
      showMenu: true, // Für Handys: Anzeigen des Menüs
      isMobile: false,
    };
  },
  computed: {
    darkMode() {
      return this.$store.state.darkMode;
    },
  },
  mounted() {
    this.isMobile = window.innerWidth < 768; // Hier setzen wir den isMobile-Status beim Laden der Komponente basierend auf dem Viewport-Breitenwert
    if (this.isMobile) this.showMenu = false;
    window.addEventListener("resize", this.handleResize); // Hier fügen wir den Event-Listener hinzu, um den isMobile-Status bei Änderungen des Viewports zu aktualisieren
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
      this.toggleMenu();
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
    toggleMenu() {
      if (this.isMobile) this.showMenu = !this.showMenu;
    },
    handleResize() {
      this.isMobile = window.innerWidth < 768;
      if (!this.isMobile) this.showMenu = true;
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
