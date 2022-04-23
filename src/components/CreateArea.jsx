import React,{useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {

const [inputText, setInputText] = useState("");
const [areaText, setText] = useState("");
const [clicked,setclick] = useState(false)

function HandleChangeTitle(event){
    //handles the title change
    const newValue = event.target.value;
    setInputText(newValue)
}

function HandleChangeText(event){
    //handles the content change
    const anothernewValue = event.target.value;
    setText(anothernewValue)
}

function submitNote(event) 
//calling the function add item and inserting to it the values
{
    props.OnAdd({"title" : inputText,
    "text" : areaText});
    event.preventDefault();
  }

  function changeParams(){
    setclick(true)
  }

  return (
    <div>
      <form className="create-note">
        {clicked&&<input onChange={HandleChangeTitle} name="title" placeholder="Title" />}
        <textarea onClick={changeParams} onChange={HandleChangeText}  name="content" placeholder="Take a note..." rows={clicked?3:1} />
        <Zoom in={clicked?true:false}><Fab onClick= {submitNote}><AddIcon/></Fab></Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
