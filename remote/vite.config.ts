import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { federation } from "@module-federation/vite";

export default defineConfig({
  server: {
    port: 3001
  },
  build: {
    target: "chrome89",
  },
  plugins: [
    tsconfigPaths(),
    federation({
      filename: 'remoteEntry.js',
      name: 'remote',
      exposes: {
        './remote-app': './src/routes.tsx',
      },
      shared: ["react", "react-dom", "react-router"]
    }),
    reactRouter(),
  ],
});