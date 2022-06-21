import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
const path = require("path");
const resolve = (str) => path.resolve(__dirname, str);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve("./src"),
      Components: resolve("./src/components"),
      Pages: resolve("./src/pages"),
      Types: resolve("./src/types"),
      Styles: resolve("./src/styles"),
      Asserts: resolve("./src/assets"),
    },
  },
});
