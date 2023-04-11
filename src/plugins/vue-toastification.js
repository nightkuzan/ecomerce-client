import Toast, { useToast } from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";

const options = { timeout: 2000};

export default {
    install(app) {
        app.use(Toast, options);
        app.config.globalProperties.$toast = useToast();
    }
};