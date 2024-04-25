import React, { useState, useContext } from "react";
import data from "./data";

const PersonContext = React.createContext();
//two components - provider, consumer

const ContextAPI = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };
  return (
    <PersonContext.Provider value={{ removePerson, people }}>
      {/* first curly brace for js, 2nd for object */}
      <h3>prop drilling</h3>
      <List />
    </PersonContext.Provider>
  );
};

const List = () => {
  const mainData = useContext(PersonContext);
  console.log(mainData);
  return (
    <>
      {mainData.people.map((person) => {
        return <SinglePerson key={person.id} {...person} />;
      })}{" "}
    </>
  );
};
const SinglePerson = (person) => {
  const { id, names } = person;
  const { removePerson } = useContext(PersonContext);
  console.log(data);
  return (
    <div className="item">
      <h4>{names} </h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  );
};

export default ContextAPI;
