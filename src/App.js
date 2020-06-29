import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { increment } from "./action";

function App() {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => dispatch(increment()), 1000);
  }, [count]);

  return (
    <div className="App">
      <h1>Counter</h1>
      <h3>{count}</h3>
    </div>
  );
}

export default App;
