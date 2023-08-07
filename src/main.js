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

library.add(faCircleHalfStroke, faLanguage, faArrowDown);

const app = createApp(App);

app.use(store);
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(VueScrollTo);
app.mount("#app");
