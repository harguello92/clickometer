import { initConfig } from "./helpers/config";
import app from "./app";

describe("Initialization", () => {
  it("should start the app properly way", () => {
    const config = initConfig({});
    const appInstance = app(config);

    expect(appInstance).toBe(true);
  });

  it("should start the app with errors", () => {
    const appInstance = app();

    expect(appInstance).toBe(false);
  });
});
