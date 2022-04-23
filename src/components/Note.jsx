import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

function Note(props) {
  //making the note obj and using the delete function
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={()=> props.Ondel(props.id)}><DeleteIcon/></button>
    </div>
  );
}

export default Note;
