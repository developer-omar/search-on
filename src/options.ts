import { createApp } from "vue";

import Default from "./layouts/Default.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";


createApp(Default)
  .use(vuetify)
  .use(router)
  .mount("body");
