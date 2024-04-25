import React from "react";
//here when we have to change the title but also preserve the previous title we use usestate
const ErrorExample = () => {
  let title = "random title";

  const handleClick = () => {
    console.log(title);
  };
  return (
    <React.Fragment>
      <h2>{title} </h2>
      <button type="button" className="btn" onClick={handleClick}>
        change title
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;
