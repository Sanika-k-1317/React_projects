import React, { useEffect, useRef } from "react";

const UseRefBasics = () => {
  const refContainer = useRef(1);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refContainer.current.value);
  };

  useEffect(() => {
    console.log(refContainer.current);
    refContainer.current.focus();
  });

  console.log(refContainer.current.value);
  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input type="text" ref={refContainer} />
          <button type="submit">submit</button>
        </div>
      </form>
      <h2>use ref</h2>
    </>
  );
};
export default UseRefBasics;
