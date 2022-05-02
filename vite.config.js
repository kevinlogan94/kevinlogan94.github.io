import { defineConfig } from "vite";
import { createVuePlugin as vue } from "vite-plugin-vue2";
// import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
const path = require("path");
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "~": path.resolve(__dirname, "./node_modules/"),
    },
  },
});
