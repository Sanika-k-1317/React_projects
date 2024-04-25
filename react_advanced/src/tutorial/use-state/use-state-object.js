import React from "react";

const UseStateObject = () => {
  const [person, setPerson] = React.useState({
    Name: "peter",
    age: 24,
    message: "I am learning react",
  });

  const changeMessage = () => {
    setPerson({ ...person, message: "and still learning" });
  };

  return (
    <>
      <h3>{person.Name} </h3>
      <h3>{person.age} </h3>
      <h3>{person.message} </h3>
      <button className="btn" onClick={changeMessage}>
        change message
      </button>
    </>
  );
};

export default UseStateObject;
