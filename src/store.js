import { createStore } from "vuex";

export default createStore({
  state: {
    darkMode: true,
    selectedLanguage: "de",
  },
  mutations: {
    setDarkMode(state, value) {
      state.darkMode = value;
    },
    setSelectedLanguage(state, languageCode) {
      state.selectedLanguage = languageCode;
    },
  },
  actions: {},
  getters: {},
});
