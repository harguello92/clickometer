import appState from "./state";

description("modules/state", () => {
  test("should return a initial appState", () => {
    expect(appState).toBe(Object({}));
  });
});
