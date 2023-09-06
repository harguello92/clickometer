const state = {
  value: 0,
  increment() {
    this.value = this.value + 1;
  },
  decrement() {
    this.value = this.value - 1;
  },
};

export default state;
