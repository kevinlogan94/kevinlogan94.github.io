import Vue from "vue";
import App from "./App.vue";
import Oruga from "@oruga-ui/oruga";
import { bulmaConfig } from "@oruga-ui/theme-bulma";
import "@/scss/main.scss";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcBHeItHJVEx7Mvrz3cjL8C3RQKy_HNn0",
  authDomain: "personal-web-application.firebaseapp.com",
  projectId: "personal-web-application",
  storageBucket: "personal-web-application.appspot.com",
  messagingSenderId: "322364835279",
  appId: "1:322364835279:web:64f6e3eae2a12273bcfeba",
  measurementId: "G-TSMGELVFV4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

Vue.prototype.$analytics = analytics;

Vue.use(Oruga, bulmaConfig);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
