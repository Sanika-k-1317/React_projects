import React, { useState, useEffect } from "react";

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerwidth);
  console.log(size);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
      console.log("cleanup");
      window.removeEventListener("resize", checkSize);
    };
  });
  return (
    <>
      <h1> use effect cleanup</h1>
      <h2>window</h2>
      <h3>{size} PX</h3>
    </>
  );
};

export default UseEffectCleanup;
