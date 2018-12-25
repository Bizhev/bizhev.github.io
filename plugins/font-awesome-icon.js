import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faEnvelope,
  faSpinner,
  faBriefcase,
  faPhoneSquare,
  faStroopwafel
} from "@fortawesome/free-solid-svg-icons";
// import { githubSquare } from "@fortawesome/fontawesome-common-types";
import {
  FontAwesomeIcon,
  FontAwesomeLayers
  //   FontAwesomeLayersText
} from "@fortawesome/vue-fontawesome";

library.add(faEnvelope, faSpinner, faBriefcase, faPhoneSquare, faStroopwafel);

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.component("font-awesome-layers", FontAwesomeLayers);
// Vue.component("font-awesome-layers-text", FontAwesomeLayersText);

Vue.config.productionTip = false;
