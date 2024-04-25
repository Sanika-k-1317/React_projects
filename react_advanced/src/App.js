import React from "react";
import Setup from "./tutorial/react-router/set-up";
//does not trigger rerender so no dependency required in use effect
function App() {
  return (
    <div className="container">
      <h4>Advanced react</h4>
      {/* multiple inputs lihaychay */}
      <Setup />
    </div>
  );
}

export default App;
