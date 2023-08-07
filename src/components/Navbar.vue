<template>
  <div class="navbar-container fixed top-0 left-0 right-0">
    <nav
      :class="{
        'bg-white': !darkMode,
        'bg-gray-900': darkMode,
      }"
      class="p-4 shadow-lg flex flex-col md:flex-row justify-between items-center"
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
          class="flex flex-col md:flex-row"
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
              'mb-2': isMobile,
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
            v-bind:style="[darkMode ? { color: '#ffffff' } : {}]"
            @click="toggleLanguageDropdown"
          />
        </div>
      </div>
    </nav>
    <!-- Dropdown-Menü für Sprachauswahl -->
    <transition name="fade">
      <div
        v-if="showLanguageDropdown"
        :class="{
          'language-dropdown-mobile': isMobile,
          'language-dropdown-non-mobile': !isMobile,
        }"
        class="w-full md:w-auto bg-white dark:bg-gray-900 rounded shadow-lg"
      >
        <ul class="py-2 md:flex md:space-x-4">
          <li
            v-for="(language, index) in languages"
            :key="index"
            :class="{
              'text-black': !darkMode,
              'text-white': darkMode,
              'bg-blue-500': isLanguageSelected(language.code),
              'hover:bg-blue-500':
                hoveredLanguage === language.code &&
                !isLanguageSelected(language.code),
              'hover:text-white':
                hoveredLanguage === language.code &&
                !isLanguageSelected(language.code),
              'cursor-pointer': !isLanguageSelected(language.code),
            }"
            @mouseenter="hoveredLanguage = language.code"
            @mouseleave="hoveredLanguage = null"
            @click="selectLanguage(language.code)"
            class="px-4 py-2 cursor-pointer"
          >
            {{ language.name }}
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  components: {
    FontAwesomeIcon,
  },
  data() {
    return {
      showLanguageDropdown: false,
      isGerman: false,
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
    toggleLanguageDropdown() {
      this.showLanguageDropdown = !this.showLanguageDropdown;
    },
    isLanguageSelected(languageCode) {
      return this.selectedLanguage === languageCode;
    },
    selectLanguage(languageCode) {
      this.selectedLanguage = languageCode;
      this.showLanguageDropdown = false;
      this.$store.commit("setSelectedLanguage", languageCode);
    },
  },
};
</script>

<style>
/* Rest des Codes bleibt unverändert */

/* Fade-Transition für das Dropdown-Menü */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}

.language-dropdown-non-mobile {
  width: min-content;
  margin: 10px;
  margin-left: auto;
  border-radius: 10px;
}

.language-dropdown-non-mobile > ul {
  padding: 0;
}

.language-dropdown-non-mobile > ul > li {
  border-radius: 10px;
  margin: 0 !important;
}

.navbar-container {
  z-index: 40;
}
</style>
