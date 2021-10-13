import Vue from "vue";
import App from "./App.vue";
import Buefy from "buefy";

import "@/scss/main.scss";

Vue.use(Buefy);
Vue.config.productionTip = false;

document.title =
  "Kevin Logan - Software Engineer, Meditator, Scholar, Video Game Designer";

new Vue({
  render: (h) => h(App),
}).$mount("#app");
