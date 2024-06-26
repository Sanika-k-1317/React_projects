import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);

  const reset = () => {
    setValue(0);
  };

  const complexInc = () => {
    setTimeout(() => {
      setValue((prevState) => {
        return prevState + 1;
      });
    }, 2000);
  };

  return (
    <>
      <section style={{ margin: "4 rem 0" }}>
        <h2>regular counter</h2>
        <h1>{value} </h1>
        <button className="btn" onClick={() => setValue(value - 1)}>
          decrease
        </button>
        <button className="btn" reset onClick={reset}>
          reset
        </button>
        <button className="btn" onClick={() => setValue(value + 1)}>
          increase
        </button>
      </section>

      <section style={{ margin: "4 rem 0" }}>
        <h2>more complex counter</h2>
        <h1>{value} </h1>
        <button className="btn" onlick={complexInc}>
          increase later
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
