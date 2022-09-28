import { createApp } from "vue";
import App from "./main.vue";

// import WebCam from "../../src";
// Vue.use(WebCam);
const app = createApp(App);
app.config.errorHandler = () => null;
app.config.warnHandler = () => null;
