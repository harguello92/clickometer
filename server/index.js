import app from "./app.js";
import { initConfig } from "./helpers/config.js";

export default (customConfig) => {
  const config = initConfig(customConfig);
  app(config);
};
