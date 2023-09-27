import appState from "./modules/state.js";
import { events, customEvents } from "./modules/events.js";
import { buildResponseData } from "./helpers/data.js";

let currentInterval = 0;

const runIncrement = (config) => {
  if (appState.value === config.maxClicks) {
    return config.onExceeded(buildResponseData({ state: appState, config }));
  }

  appState.increment();

  config.onChange(buildResponseData({ state: appState, config }));
};

const runInterval = (config) => {
  clearInterval(currentInterval);

  currentInterval = setInterval(() => {
    if (appState.value === 0) {
      clearInterval(currentInterval);
      currentInterval = null;
      return;
    }

    appState.decrement();

    config.onChange(buildResponseData({ state: appState, config }));
  }, config.timeInterval);
};

const init = (config) => {
  config.onChange(buildResponseData({ state: appState, config }));
};

export default (config) => {
  try {
    init(config);

    events({
      DOMElement: config.DOMElement,
      action: () => {
        runIncrement(config);
        runInterval(config);
      },
    });

    customEvents({
      DOMElment: config.DOMElement,
      events: config.customEvents,
      action: () => {
        runIncrement(config);
        runInterval(config);
      },
    });

    return true;
  } catch (error) {
    return false;
  }
};
