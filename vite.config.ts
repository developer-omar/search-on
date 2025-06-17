import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import webExtension, { readJsonFile } from "vite-plugin-web-extension";
import Vuetify from 'vite-plugin-vuetify';

function generateManifest() {
  const manifest = readJsonFile("src/manifest.json");
  const pkg = readJsonFile("package.json");
  return {
    name: pkg.name,
    description: pkg.description,
    version: pkg.version,
    ...manifest,
  };
}

const target = process.env.TARGET || "firefox";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Vuetify({ autoImport: true }),
    webExtension({
      //manifest: generateManifest,
      manifest: target == "chrome" ? "src/manifest.chrome.json" : "src/manifest.firefox.json",
      watchFilePaths: ["package.json", "manifest.json"],
      browser: "firefox",
    }),
  ],
});
