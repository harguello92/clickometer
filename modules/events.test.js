import userEvent from "@testing-library/user-event";
import { within } from "@testing-library/dom";
import { events, customEvents } from "./events";

const DOMElement = document.body;
const actionFunction = jest.fn();

describe("Events", () => {
  const user = userEvent.setup();

  it("should bind some event to some document", async () => {
    events({
      DOMElement,
      action: () => {
        DOMElement.innerHTML = "Clicked";
      },
    });

    await user.click(DOMElement);

    const text = within(DOMElement).getByText("Clicked");
    expect(text.textContent).toMatch("Clicked");
  });

  it("should bind some custom event to some document", async () => {
    customEvents({
      DOMElement,
      events: ["click", "clickometer.custom"],
      action: actionFunction,
    });

    await user.click(DOMElement);

    expect(actionFunction).toHaveBeenCalledTimes(1);

    const customEvent = new CustomEvent("clickometer.custom", {});
    DOMElement.dispatchEvent(customEvent);

    expect(actionFunction).toHaveBeenCalledTimes(2);
  });
});
