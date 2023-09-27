const defaultConfig = {
  DOMElement: document.body,
  maxClicks: 5,
  timeInterval: 1000,
  onChange: () => {},
  onExceeded: () => {},
  customEvents: [],
};

export const initConfig = (config) => ({ ...defaultConfig, ...config });
