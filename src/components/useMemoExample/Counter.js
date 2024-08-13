import React, { useMemo, useState } from "react";

function Counter() {
  const [one, setOne] = useState(0);
  const [two, setTwo] = useState(0);

  const incrementOne = () => {
    setOne(one + 1);
  };

  const incrementTwo = () => {
    setTwo(two + 1);
  };

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 2000000) i++;
    return one % 2 === 0;
  }, [one]);

  return (
    <div>
      <button onClick={incrementOne}>Counter {one}</button>
      <span>{isEven ? "Even" : "Odd"}</span>
      <br />
      <button onClick={incrementTwo}>Counter {two}</button>
    </div>
  );
}

export default Counter;
