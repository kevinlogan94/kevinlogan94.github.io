import Vue from "vue";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faMagic,
  faCode,
  faCogs,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faCode,
  faCogs,
  faEnvelope,
  faLinkedin,
  faGithub,
  faTwitter,
  faMagic
);

Vue.component("font-awesome-icon", FontAwesomeIcon);

import "@/assets/main.scss";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
