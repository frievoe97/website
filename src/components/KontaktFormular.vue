<template>
  <div id="contact-page" :class="{ dark: darkMode }">
    <div class="mx-4">
      <h2
        :class="{ 'text-black': !darkMode, 'text-white': darkMode }"
        class="text-4xl font-semibold text-center mb-8"
      >
        Kontakt
      </h2>
      <form @submit.prevent="submitForm" class="max-w-md mx-auto">
        <div class="mb-4">
          <label
            :class="{ 'text-gray-700': !darkMode, 'text-white': darkMode }"
            for="name"
            class="block font-semibold mb-1"
            >Name</label
          >
          <input
            type="text"
            id="name"
            v-model="formData.name"
            :class="{
              'w-full p-2 border rounded border-black': !darkMode,
              'w-full p-2 border rounded text-white bg-gray-800': darkMode,
            }"
            required
          />
        </div>

        <div class="mb-4">
          <label
            :class="{
              'text-gray-700 border-black': !darkMode,
              'text-white': darkMode,
            }"
            for="email"
            class="block font-semibold mb-1"
            >E-Mail</label
          >
          <input
            type="email"
            id="email"
            v-model="formData.email"
            :class="{
              'w-full p-2 border rounded border-black': !darkMode,
              'w-full p-2 border rounded text-white bg-gray-800': darkMode,
            }"
            required
          />
        </div>

        <div class="mb-4">
          <label
            :class="{
              'text-gray-700 border-black': !darkMode,
              'text-white': darkMode,
            }"
            for="message"
            class="block font-semibold mb-1"
            >Nachricht</label
          >
          <textarea
            id="message"
            v-model="formData.message"
            :class="{
              'w-full p-2 border rounded border-black': !darkMode,
              'w-full p-2 border rounded text-white bg-gray-800': darkMode,
            }"
            rows="4"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          :class="{
            'border px-4 py-2 rounded w-full': true,
            'bg-inherit hover:bg-gray-600 text-black border-black': !darkMode,
            'bg-inherit hover:bg-gray-800 text-white border-white': darkMode,
          }"
        >
          Senden
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: "",
        email: "",
        message: "",
      },
    };
  },
  computed: {
    darkMode() {
      return this.$store.state.darkMode; // Zugriff auf den darkMode-Wert aus dem Store
    },
  },
  methods: {
    submitForm() {
      // Hier kannst du die Logik zum Versenden des Formulars einfügen
      console.log(this.formData);
      // Hier kannst du die Daten zum Backend senden, eine API aufrufen, etc.
      // Implementiere die entsprechende Logik hier, um das Formular tatsächlich zu senden
      // Zum Beispiel: axios.post('/api/kontakt', this.formData);
    },
  },
};
</script>

<style>
/* Füge hier zusätzliche benutzerdefinierte Stile hinzu, falls erforderlich */
</style>
