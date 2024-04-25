import React, { useState, useEffect } from "react";

const Showhide = () => {
  const [shoe, setShow] = useState(true);
  return (
    <>
      <h1>show/hide</h1>
      <button className="btn" onClick={() => setShow(!shoe)}>
        show/hide
      </button>
      {shoe && <Item />}
      {/*  toggling element, useeffect overload, dynamic array not enough, cleanup func necessary */}
    </>
  );
};

const Item = () => {
  return (
    <div style={{ marginTop: "2rem" }}>
      <h1>window</h1>
      <h2>size: </h2>
    </div>
  );
};

export default Showhide;
