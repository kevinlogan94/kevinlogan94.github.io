import Vue from "vue";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCode,
  faCogs,
  faUniversalAccess,
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
  faUniversalAccess,
  faEnvelope,
  faLinkedin,
  faGithub,
  faTwitter
);

Vue.component("font-awesome-icon", FontAwesomeIcon);

import "@/assets/main.scss";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
