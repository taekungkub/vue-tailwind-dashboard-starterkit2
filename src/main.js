import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import "./assets/button.css";
import en from "../src/assets/locales/en.json";
import th from "../src/assets/locales/th.json";

import { createI18n } from "vue-i18n";

const messages = {
  en,
  th,
};

const i18n = createI18n({
  locale: "en",
  messages,
});
import DashboardLayout from "./layout/DashboardLayout.vue";
import EmptyLayout from "./layout/EmptyLayout.vue";

import Flex from "./components/Layout/Flex.vue";
import Column from "./components/Layout/Column.vue";
import ModalWithConfirm from "./components/Modal/ModalWithConfirm.vue";
import PageHeader from "./components/PageHeader.vue";
import BaseCard from "./components/Base/BaseCard.vue";

import router from "./router";

const globalComponent = {
  install(app) {
    app.component("default-layout", DashboardLayout);
    app.component("empty-layout", EmptyLayout);
    app.component("Flex", Flex);
    app.component("Column", Column);
    app.component("ModalWithConfirm", ModalWithConfirm);
    app.component("PageHeader", PageHeader);
    app.component("BaseCard", BaseCard);
  },
};

const app = createApp(App);
app.use(i18n);
app.use(globalComponent);
app.use(router);
app.mount("#app");
