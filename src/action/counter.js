const CounterAction = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
};

const increment = () => ({
  type: CounterAction.INCREMENT,
});

const decrement = () => ({
  type: CounterAction.DECREMENT,
});

export { CounterAction, increment, decrement };
