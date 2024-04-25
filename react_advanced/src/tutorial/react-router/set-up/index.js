import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
  Link,
} from "react-router-dom";

import Error from "./Error";
import About from "./About";
import Home from "./home";
import Nav from "./navbar";
import People from "./people";
import Person from "./person";

const ReactRouterSetup = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/error" element={<Error />} />
        <Route exact path="/nav" element={<Nav />} />
        <Route exact path="/pep" element={<People />} />
        <Route exact path="/person/:id" element={<Person />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
};

export default ReactRouterSetup;
