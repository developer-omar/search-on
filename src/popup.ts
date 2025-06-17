import { createApp } from "vue";

import Popup from "./pages/Popup.vue";
import vuetify from "./plugins/vuetify";

createApp(Popup)
  .use(vuetify)
  .mount("body");
