import React from "react";
import { Link } from "react-router-dom";
const navbar = () => {
  return (
    <div>
      navbar
      <nav>
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <Link to="/error">error</Link>
          </li>
          <li>
            <Link to="/pep">people</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default navbar;
