<template>
  <div id="about-me-page" :class="{ dark: darkMode }">
    <div class="w-screen max-w-full mx-auto p-4">
      <div class="flex flex-col items-center">
        <h2
          :class="{ 'text-black': !darkMode, 'text-white': darkMode }"
          class="text-4xl font-semibold mt-4"
        >
          Über mich
        </h2>
        <div class="w-24 h-24 rounded-full overflow-hidden mt-4">
          <img
            :src="imageSrc"
            alt="Profilbild"
            class="object-cover w-full h-full"
          />
        </div>
        <p
          :class="{
            'text-black': !darkMode,
            'text-white': darkMode,
            'text-lg': !isMobile,
            'text-base': isMobile,
            'max-w-3xl': !isMobile,
          }"
          class="mt-4 text-justify"
        >
          {{ aboutText }}
        </p>
      </div>

      <!-- Zentrierte Timeline (Lebenslauf) -->
      <div class="mt-12 flex flex-col items-center">
        <div>
          <div
            v-for="(item, index) in timelineData"
            :key="index"
            class="relative"
          >
            <!-- Timeline Punkt -->
            <div
              :class="{ 'bg-white': !darkMode, 'bg-gray-800': darkMode }"
              class="border-2 border-blue-500 rounded-full w-6 h-6 absolute top-3 transform -translate-y-1/2 left-4"
            ></div>
            <!-- Timeline Inhalt -->
            <div
              :class="{
                'border-l-2 border-blue-500': !darkMode,
                'border-l-2 border-grey-700': darkMode,
              }"
              class="ml-7 pl-4 pb-4"
            >
              <h3
                :class="{
                  'text-xl font-semibold': !darkMode,
                  'text-white text-xl font-semibold': darkMode,
                }"
              >
                {{ item.year }}
              </h3>
              <p
                :class="{ 'text-gray-600': !darkMode, 'text-white': darkMode }"
                class="mt-2"
              >
                {{ item.description }}
              </p>
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
      imageSrc:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Man_silhouette.svg/703px-Man_silhouette.svg.png",
      aboutText:
        "Hier kannst du einen kurzen Text über dich selbst einfügen. Erzähle den Leuten, wer du bist, was du gerne machst und worauf du in deiner Karriere als Full-Stack-Entwickler stolz bist. Hier kannst du einen kurzen Text über dich selbst einfügen. Erzähle den Leuten, wer du bist, was du gerne machst und worauf du in deiner Karriere als Full-Stack-Entwickler stolz bist. Hier kannst du einen kurzen Text über dich selbst einfügen. Erzähle den Leuten, wer du bist, was du gerne machst und worauf du in deiner Karriere als Full-Stack-Entwickler stolz bist.",
      timelineData: [
        {
          year: "2016: Abitur",
          description: "Abitur",
        },
        {
          year: "2016 - 2017: FSJ Kultur",
          description: "FSJ Kultur",
        },
        {
          year: "2017 - 2022: Verkehrswesen (B. Sc) TU Berlin",
          description: "Verkehrswesen (B. Sc) TU Berlin",
        },
        {
          year: "seit 2022: Angewandte Informatik (B. Sc.) HTW Berlin",
          description: "Angewandte Informatik (B. Sc.) HTW Berlin",
        },
        // Füge weitere Zeitpunkte und Inhalte hinzu
      ],
    };
  },
  computed: {
    darkMode() {
      return this.$store.state.darkMode; // Zugriff auf den darkMode-Wert aus dem Store
    },
    isMobile() {
      // Überprüfung, ob das Gerät als Mobilgerät erkannt wurde
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
    },
  },
};
</script>

<style>
/* Füge benutzerdefinierte Stile für die About Me-Komponente hinzu, wenn nötig */
</style>
