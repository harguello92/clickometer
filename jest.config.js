/** @type {import('jest').Config} */

const config = {
  injectGlobals: true,
  verbose: true,
  testEnvironment: "jsdom",
  setupFiles: ["<rootDir>/test-setup.js"],
};

export default config;
