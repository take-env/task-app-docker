import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  server: {
    host: true,
    port: 3000,
    hmr: {
      host: "localhost",
      port: 3000,
      protocol: "ws",
    },
  },
});
