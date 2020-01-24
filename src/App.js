import React from "react";
import CommentInputContainer from "./containers/comment/CommentInputContainer.js";
import CommentListContainer from "./containers/comment/CommentListContainer.js";

function App() {
  return (
    <div className="mx-auto">
      <div className="bg-white mx-auto mt-2 p-4 border border-gray-400" style={{"width": "600px"}}>
        <CommentListContainer />
        <CommentInputContainer />
      </div>
    </div>
  );
}

export default App;
