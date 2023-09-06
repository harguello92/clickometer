const inputFile = "index.js";

const moduleConfig = {
  input: inputFile,
  output: {
    file: "dist/bundle.js",
    format: "module",
  },
};

const commonJsConfig = {
  input: inputFile,
  output: {
    file: "dist/bundle.cjs",
    format: "cjs",
  },
};

export default [moduleConfig, commonJsConfig];
