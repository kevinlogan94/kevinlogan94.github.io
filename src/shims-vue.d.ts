import firebase from "firebase/compat";

declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}

declare module "vue/types/vue" {
  import Analytics = firebase.analytics.Analytics;

  export interface Vue {
    $analytics: Analytics;
  }
}
