const defaultConfig = {
  DOMElement: document,
  maxClicks: 5,
  timeInterval: 1000,
  onChange: () => {},
  onExceeded: () => {},
  events: [],
};

export const initConfig = (config) => ({ ...defaultConfig, ...config });
