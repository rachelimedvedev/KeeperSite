import React from "react";

 function Note(props) {
   //the props are initialized here and the data will be placed into them
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
    </div>
  );
}

export default Note;
