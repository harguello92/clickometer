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

let currentInterval = 0;

const runIncrement = (config) => {
  if (state.value === config.maxClicks) {
    return config.onExceeded(buildResponseData({ state: state, config }));
  }

  state.increment();

  config.onChange(buildResponseData({ state: state, config }));
};

const runInterval = (config) => {
  clearInterval(currentInterval);

  currentInterval = setInterval(() => {
    if (state.value === 0) {
      clearInterval(currentInterval);
      currentInterval = null;
      return;
    }

    state.decrement();

    config.onChange(buildResponseData({ state: state, config }));
  }, config.timeInterval);
};

const init = (config) => {
  config.onChange(buildResponseData({ state: state, config }));
};

var app = (config) => {
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
      events: config.events,
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

const defaultConfig = {
  DOMElement: document,
  maxClicks: 5,
  timeInterval: 1000,
  onChange: () => {},
  onExceeded: () => {},
  events: [],
};

const initConfig = (config) => ({ ...defaultConfig, ...config });

var clickometer = (customConfig) => {
  const config = initConfig(customConfig);
  app(config);
};

(() => {
  clickometer({
    DOMElement: document,
    animation: true,
    maxClicks: 10,
    timeInterval: 1000,
    onChange: ({ percentatge }) => {
      document.body.style.backgroundColor = "initial";
      document.body.innerHTML = percentatge + "%";
    },
    onExceeded: ({ percentatge }) => {
      document.body.style.backgroundColor = "red";
      document.body.innerHTML = `¡Cuidado!, ${percentatge}% completado`;
    },
  });
})();
