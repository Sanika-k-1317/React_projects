import React, { useState, useEffect } from "react";

const useEffectBasics = () => {
  const [value, setValue] = useState(0);
  //run after every render
  useEffect(() => {
    console.log("hello world learning react");
    document.title = "New Messages(value) ";
  }, [value]);

  console.log("render component");

  return (
    <>
      <h2>use effect basics</h2>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        click me
      </button>
    </>
  );
};

export default useEffectBasics;
