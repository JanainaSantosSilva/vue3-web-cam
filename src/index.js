import WebCam from "./webcam";

function plugin(app) {
  app.component("vue-web-cam", WebCam);
}

// Install by default if using the script tag
if (typeof window !== "undefined" && window.app) {
  window.app.use(plugin);
}

export default plugin;
const version = "__VERSION__";
// Export all components too
export { WebCam, version };
