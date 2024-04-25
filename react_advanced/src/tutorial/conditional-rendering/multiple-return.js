import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturn = () => {
  const [loading, setLoading] = useState(false);
  const [isError, setisError] = useState(false);
  const [user, setUser] = useState("default user");

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((response) => {
        if (response.status >= 200 && response.status <= 299) {
          return response.json();
        } else {
          setLoading(false);
          setisError(true);
          throw new Error(response.statusText);
        }
      })
      .then((user) => {
        const { login } = user;
        setUser(login);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  if (loading) {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  }
  if (isError) {
    return (
      <div>
        <h2>Error...</h2>
      </div>
    );
  }

  return (
    <div>
      <h2>{user} </h2>
    </div>
  );
};

export default MultipleReturn;
