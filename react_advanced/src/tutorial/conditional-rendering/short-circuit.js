import React, { useState, useEffect } from "react";

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const [isError, setIsError] = useState(true);

  const firstValue = text || "hello world";
  const SecondValue = text && "hello world";
  return (
    <>
      {/* <h1>{firstValue} </h1>
      <h1>value: {SecondValue} </h1>
      <h3>short circuit</h3> */}
      <h1>{text || "john doess"} </h1>
      <button className="btn" onClick={() => setIsError(!isError)}>
        toggle error
      </button>

      {isError && <h1>Error...</h1>}
      {isError ? (
        <p>jfidoskkl</p>
      ) : (
        <div>
          <h2>there is no error</h2>
        </div>
      )}
    </>
  );
};

export default ShortCircuit;
