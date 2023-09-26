import html from "@rollup/plugin-html";
import terser from "@rollup/plugin-terser";

const moduleConfig = {
  input: "index.js",
  output: {
    file: "dist/clickometer.min.js",
    format: "es",
  },
  plugins: [terser()],
};

const commonJsConfig = {
  input: "index.js",
  output: {
    file: "dist/clickometer.min.cjs",
    format: "cjs",
  },
  plugins: [terser()],
};

const iifeJsConfig = {
  input: "index.js",
  output: {
    file: "dist/clickometer.browser.min.js",
    format: "iife",
    name: "Clickometer",
  },
  plugins: [terser()],
};

const demoConfig = {
  input: "demo.js",
  output: {
    file: "dist/clickometer.demo.js",
    format: "es",
  },
  plugins: [html()],
};

export default [moduleConfig, commonJsConfig, iifeJsConfig, demoConfig];
