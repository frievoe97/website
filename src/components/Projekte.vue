<template>
  <div id="project-page" :class="{ dark: darkMode }">
    <div class="min-h-screen w-screen">
      <div class="container mx-auto p-8">
        <h2
          :class="{ 'text-black': !darkMode, 'text-white': darkMode }"
          class="text-4xl font-semibold text-center mb-8"
        >
          Meine Projekte
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Projekt Card -->
          <div
            v-for="projekt in projekte"
            :key="projekt.id"
            :class="{ 'bg-white': !darkMode, 'bg-gray-700': darkMode }"
            class="p-4 rounded-lg shadow-md overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105 flex flex-col justify-between"
          >
            <div class="relative">
              <img
                :src="projekt.imageSrc"
                alt="Projekt Bild"
                class="w-full h-auto object-cover"
              />
              <div
                class="absolute inset-0 bg-black bg-opacity-20 hover:bg-opacity-40 transition-opacity duration-300"
              ></div>
            </div>
            <div
              :class="{ 'text-white': darkMode }"
              class="pt-4 flex flex-col justify-between flex-grow"
            >
              <h3 class="text-lg font-semibold">{{ projekt.name }}</h3>
              <p class="text-base">{{ projekt.beschreibung }}</p>
              <!-- Hier ändern wir die Klasse auf text-base oder text-lg -->
              <div class="mt-4">
                <!-- Füge Links zu GitHub und dem Projekt hinzu -->
                <a
                  :href="projekt.githubLink"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-blue-500 hover:underline mr-4"
                  >GitHub</a
                >
                <a
                  v-if="projekt.linkname.length"
                  :href="projekt.projektLink"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-blue-500 hover:underline"
                  >{{ projekt.linkname }}</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projekte: [
        {
          id: 1,
          name: "Toxmap Berlin",
          beschreibung:
            "ToxMap Berlin ist eine interaktive Website, die im Rahmen eines Universitätsprojekts entwickelt wurde und umweltschädliche Standorte auf einer Karte in Berlin anzeigt.",
          imageSrc:
            "https://miro.medium.com/v2/resize:fit:1400/1*8ZGC79f70ZpDbwrhYha-xA.png", // Passe den Pfad zur Bildquelle an
          githubLink: "https://github.com/frievoe97/toxmap-berlin",
          projektLink: "https://toxmap.friedrichvoelkers.de",
          linkname: "Link",
        },
        {
          id: 2,
          name: "Encrypted ESP32 Walkie-Talkie",
          beschreibung:
            "ToxMap Berlin ist eine interaktive Website, die im Rahmen eines Universitätsprojekts entwickelt wurde und umweltschädliche Standorte auf einer Karte in Berlin anzeigt.",
          imageSrc:
            "https://m.media-amazon.com/images/I/61TXFhQWNfL._AC_UF894,1000_QL80_.jpg", // Passe den Pfad zur Bildquelle an
          githubLink: "https://github.com/frievoe97/toxmap-berlin",
          projektLink: "https://toxmap.friedrichvoelkers.de",
          linkname: "",
        },
        {
          id: 3,
          name: "Dumb Calculator",
          beschreibung:
            "ToxMap Berlin ist eine interaktive Website, die im Rahmen eines Universitätsprojekts entwickelt wurde und umweltschädliche Standorte auf einer Karte in Berlin anzeigt.",
          imageSrc:
            "https://m.media-amazon.com/images/I/61TXFhQWNfL._AC_UF894,1000_QL80_.jpg", // Passe den Pfad zur Bildquelle an
          githubLink: "https://github.com/frievoe97/toxmap-berlin",
          projektLink: "https://toxmap.friedrichvoelkers.de",
          linkname: "",
        },
      ],
    };
  },
  computed: {
    darkMode() {
      return this.$store.state.darkMode; // Zugriff auf den darkMode-Wert aus dem Store
    },
  },
};
</script>

<style>
/* Füge benutzerdefinierte Stile für die Projekt Cards hinzu, wenn nötig */
</style>
