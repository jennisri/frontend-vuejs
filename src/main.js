// import createApp from vue
import { createApp } from "vue";

// import component app
import App from "./App.vue";

// import config router
import routes from "./routes";

// create App Vue
const app = createApp(App);

// gunakan 'router' di vue dengan plugin use
app.use(routes);

app.mount("#app");
