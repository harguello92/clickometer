import html from "@rollup/plugin-html";
import terser from "@rollup/plugin-terser";
import commonjs from "@rollup/plugin-commonjs";

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
  plugins: [terser(), commonjs()],
};

const iifeJsConfig = {
  input: "index.js",
  output: {
    file: "dist/clickometer.browser.min.js",
    format: "iife",
    name: "clickometer",
  },
  plugins: [terser(), commonjs()],
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
