import { defineConfig, loadEnv } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
    process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

    return {
        plugins: [
            laravel({
                input: "resources/js/app.tsx",
                refresh: true,
            }),
            react({
                include: ["**/*.tsx"],
            }),
        ],

        server: {
            host: process.env.VITE_APP_URL,
        },
    };
});
