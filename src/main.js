import { createApp } from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faCircleHalfStroke,
  faLanguage,
  faArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import "./style.css";
import App from "./App.vue";
import store from "./store";
import VueScrollTo from "vue-scrollto";
import { createI18n } from "vue-i18n";

const messages = {
  en: {
    navbar: {
      home: "Home",
      projects: "Projects",
      contact: "Contact",
      aboutMe: "About Me",
    },
    home: {
      title: "Hey! I'm Friedrich and a Full-Stack-Developer",
      projects: "Projects",
    },
    projects: {
      title: "Projects",
    },
    contact: {
      title: "Contact",
      message: "Message",
      send: "Send",
    },
    aboutMe: {
      title: "About Me",
      text: "Here you can insert a short text about yourself. Tell people who you are, what you like to do and what you are proud of in your career as a full-stack developer. Here you can insert a short text about yourself. Tell people who you are, what you like to do, and what you're proud of in your career as a full-stack developer. Here you can insert a short text about yourself. Tell people who you are, what you like to do, and what you're proud of in your career as a full-stack developer.",
    },
  },
  de: {
    navbar: {
      home: "Startseite",
      projects: "Projekte",
      contact: "Kontakt",
      aboutMe: "Über Mich",
    },
    home: {
      title: "Hey! Ich bin Friedrich und Software Developer",
      projects: "Projekte",
    },
    projects: {
      title: "Projekte",
    },
    contact: {
      title: "Kontakt",
      message: "Nachricht",
      send: "Senden",
    },
    aboutMe: {
      title: "Über Mich",
      text: "Hier kannst du einen kurzen Text über dich selbst einfügen. Erzähle den Leuten, wer du bist, was du gerne machst und worauf du in deiner Karriere als Full-Stack-Entwickler stolz bist. Hier kannst du einen kurzen Text über dich selbst einfügen. Erzähle den Leuten, wer du bist, was du gerne machst und worauf du in deiner Karriere als Full-Stack-Entwickler stolz bist. Hier kannst du einen kurzen Text über dich selbst einfügen. Erzähle den Leuten, wer du bist, was du gerne machst und worauf du in deiner Karriere als Full-Stack-Entwickler stolz bist.",
    },
  },
};

const i18n = createI18n({
  locale: "en", // set locale
  fallbackLocale: "en", // set fallback locale
  messages,
});

library.add(faCircleHalfStroke, faLanguage, faArrowDown);

const app = createApp(App);

app.use(store);
app.use(i18n);
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(VueScrollTo);
app.mount("#app");
