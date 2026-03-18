import {isDev} from "@/ts/env/packMode.ts";
import {ViteSSG} from "vite-ssg";
import App from "@/App.vue";
import router from "@/router";


export default function (){
    if (isDev) console.info(`[main-ssg.ts] 进入`);

    const createApp = ViteSSG(
        App,
        router.options,
    );

    return {createApp};
}