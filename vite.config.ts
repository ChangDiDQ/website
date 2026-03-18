import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import fs from 'fs';
import {isDev, isProd, mode} from "./src/ts/env/packMode.node.ts";
import renderMode from "./src/ts/env/renderMode.node.ts";

const distPath=path.resolve(__dirname, 'dist');

export default defineConfig(({}) => {
    console.log(`当前模式：${mode}\nisDev: ${isDev}\nisProd: ${isProd}`);
    console.log(`当前渲染模式：${renderMode}`);

    return {
        plugins: [vue()],
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src'),
            }
        },
        ssgOptions: renderMode == 'ssg' ? {
            onFinished() {
                {
                    const targetPath = path.join(distPath, '.vite');
                    if (fs.existsSync(targetPath)) {
                        fs.rmSync(targetPath, {recursive: true, force: true});
                        console.log(`[vite.config.ts] 已删除${targetPath}`);
                    }
                }
            }
        } : {},
    };
})
