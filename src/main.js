import { createApp } from "vue";
import App from "./App.vue";

kintone.events.on(
  [
    "app.record.index.show",
    "app.record.detail.show",
    "app.record.create.show",
    "app.record.edit.show",
  ],
  () => {
    const el = kintone.app.getHeaderSpaceElement();
    createApp(App).mount(el);
  }
);
