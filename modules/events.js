const bindElement = ({ DOMElement, event, action }) =>
  DOMElement.addEventListener(event, action);

export const events = ({ DOMElement, action }) => {
  bindElement({ DOMElement, event: "click", action });
};

export const customEvents = ({ DOMElement, events = [], action }) => {
  events.forEach((event) => {
    bindElement({ DOMElement, event, action });
  });
};
