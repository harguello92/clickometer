import state from "./state";

const currentState = state;

describe("State", () => {
  it("should load initial state", () => {
    expect(currentState.value).toBe(0);
  });

  it("should increase and decrease  the state", () => {
    currentState.increment();
    expect(currentState.value).toBe(1);

    currentState.increment();
    expect(currentState.value).toBe(2);

    currentState.decrement();
    expect(currentState.value).toBe(1);
  });
});
