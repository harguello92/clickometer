'use strict';

const state = {
  value: 0,
  increment() {
    this.value = this.value + 1;
  },
  decrement() {
    this.value = this.value - 1;
  },
};

const bindElement = ({ DOMElement, event, action }) =>
  DOMElement.addEventListener(event, action);

const events = ({ DOMElement, action }) => {
  bindElement({ DOMElement, event: "click", action });
};

const customEvents = ({ DOMElement, events, action }) => {
  events.forEach((event) => {
    bindElement({ DOMElement, event, action });
  });
};

const buildResponseData = ({ state, config }) => {
  return {
    currentValue: state.value,
    maxClicks: config.maxClicks,
    get percentatge() {
      return (this.currentValue * 100) / this.maxClicks;
    },
  };
};

let interval = null;

const action = (config) => {
  const responseData = buildResponseData({ state: state, config });

  if (state.value === config.maxClicks) {
    return config.onExceeded(responseData);
  }

  state.increment();
  config.onChange(responseData);

  interval = setInterval(() => {
    if (state.value === 0) {
      clearInterval(interval);
      return;
    }
    console.log("ok");
    state.decrement();
    const responseData = buildResponseData({ state: state, config });
    config.onChange(responseData);
  }, config.timeInterval);

  console.log(interval);
};

var app = (config) => {
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

const defaultConfig = {
  DOMElement: document,
  maxClicks: 5,
  timeInterval: 1000,
  onChange: () => {},
  onExceeded: () => {},
  events: [],
};

const initConfig = (config) => ({ ...defaultConfig, ...config });

var index = (customConfig) => {
  const config = initConfig(customConfig);
  app(config);
};

module.exports = index;
