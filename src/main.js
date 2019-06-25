import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "./assets/css/main.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPlusCircle,
  faEdit,
  faTrash,
  faEllipsisV,
  faSearch
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
// import datePicker from "vue-bootstrap-datetimepicker";
// import "pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css";
import vueMask from "vue-jquery-mask";
import VueFirestore from "vue-firestore";
import { fb } from "./firebase";

library.add(faPlusCircle, faEdit, faTrash, faEllipsisV, faSearch);

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.component("Navbar", require("./components/Navbar.vue").default);
Vue.component("NavbarAdmin", require("./components/NavbarAdmin.vue").default);
Vue.component(
  "SemInformacao",
  require("./components/SemInformacao.vue").default
);

Vue.use(VueFirestore);
Vue.use(BootstrapVue);
// Vue.use(datePicker);
Vue.use(vueMask);

let app = "";

fb.auth().onAuthStateChanged(function() {
  if (!app) {
    var v1 = new Vue({
      el: "#app",
      router,
      store,
      data: {
        permissao: null
      },
      render: h => h(App)
    });
    console.log("Vue criado!");
  }
});
