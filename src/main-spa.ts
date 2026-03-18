import {isDev} from "@/ts/env/packMode.ts";
import {createApp} from "vue";
import App from "@/App.vue";
import router from "@/router";

export default function (){
    if (isDev) console.info(`[main-spa.ts] 进入`);

    createApp(App)
        .use(router)
        .mount('#app');
}