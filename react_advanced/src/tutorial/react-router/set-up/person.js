import React from "react";
import { Outlet, useParams } from "react-router-dom";

const Posts = () => {
  const { id } = useParams();
  const [currentUser, setCurrentUser] = React.useState([
    /*array of post content*/
  ]);

  return (
    <div>
      <h1>List of posts go here!</h1>
      <Outlet context={[currentUser]} />
    </div>
  );
};

export default Posts;

//NewPost.jsx, the child
