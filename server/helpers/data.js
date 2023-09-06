export const buildResponseData = ({ state, config }) => {
  return {
    currentValue: state.value,
    maxClicks: config.maxClicks,
    get percentatge() {
      return (this.currentValue * 100) / this.maxClicks;
    },
  };
};
