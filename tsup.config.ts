import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  outDir: 'dist',
  format: ["cjs", "esm"], // Build for commonJS and ESmodules
  minify: true,
  dts: true, // Generate declaration file (.d.ts)
  splitting: false,
  sourcemap: true,
  clean: true,
  env: {
    NODE_ENV: 'production', // set environment on build
  }
});