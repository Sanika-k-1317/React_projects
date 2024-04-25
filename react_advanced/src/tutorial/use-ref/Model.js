import React, { useEffect } from "react";

const Model = ({ modalContent }) => {
  useEffect(() => {
    setTimeout(() => {
      closeModal();
    }, 3000);
  });
  return (
    <div className="modal">
      <p>{modalContent} </p>
    </div>
  );
};

export default Model;
