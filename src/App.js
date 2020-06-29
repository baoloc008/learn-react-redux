import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { increment } from "./action";
import { useCallback } from "react";

function App() {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const increaseNumber = useCallback(() => {
    setTimeout(() => dispatch(increment()), 1000);
  }, [dispatch]);

  useEffect(() => {
    increaseNumber();
  }, [count, increaseNumber]);

  return (
    <div className="App">
      <h1>Counter</h1>
      <h2>{count}</h2>
    </div>
  );
}

export default App;
// eslint-disable-next-line react-hooks/exhaustive-deps,
