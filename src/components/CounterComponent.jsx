import React, { useEffect } from "react";
import Button from "./Button";

const CounterComponent = ({ callback }) => {
  const [count, setCount] = React.useState(0);

  useEffect(() => {
    callback(count);
  }, [count]);

  return (
    <div className="counter-component">
      <span className="counter-buttons">
        <Button onClick={() => setCount((prev) => prev - 1)}>-</Button>
        <span className="counter-count">{count}</span>
        <Button onClick={() => setCount((prev) => prev + 1)}>+</Button>
      </span>
      <Button onClick={() => setCount(0)}>Reset</Button>
    </div>
  );
};

export default CounterComponent;
