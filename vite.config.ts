import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

import pluginChecker from "vite-plugin-checker";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: "globalThis",
      },
    },
  },
  plugins: [
    tsconfigPaths(),
    react({
      babel: {
        plugins: ["babel-plugin-macros", "babel-plugin-styled-components"],
      },
    }),
    pluginChecker({ typescript: true }),
    svgr(),
  ],
});
