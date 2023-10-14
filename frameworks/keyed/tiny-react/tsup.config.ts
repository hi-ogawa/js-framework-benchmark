import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/main.jsx"],
  format: ["iife"]
});
