import vinext from "vinext";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/porquin-finance/",

  server: {
    host: "0.0.0.0",
  },

  plugins: [vinext()],
});