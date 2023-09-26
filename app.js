import appState from "./modules/state.js";
import { events, customEvents } from "./modules/events.js";
import { buildResponseData } from "./helpers/data.js";

let interval = null;

const action = (config) => {
  const responseData = buildResponseData({ state: appState, config });

  if (appState.value === config.maxClicks) {
    return config.onExceeded(responseData);
  }

  appState.increment();
  config.onChange(responseData);

  interval = setInterval(() => {
    if (appState.value === 0) {
      clearInterval(interval);
      return;
    }
    appState.decrement();
    const responseData = buildResponseData({ state: appState, config });
    config.onChange(responseData);
  }, config.timeInterval);
};

export default (config) => {
  events({
    DOMElement: config.DOMElement,
    action: () => action(config),
  });

  customEvents({
    DOMElment: config.DOMElement,
    events: config.events,
    action: () => action(config),
  });
};
