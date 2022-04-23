import React from "react";

function Note(props) {
  //making the note obj and using the delete function
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={()=> props.Ondel(props.id)}>DELETE</button>
    </div>
  );
}

export default Note;
