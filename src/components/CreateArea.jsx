import React,{useState} from "react";

function CreateArea(props) {

const [inputText, setInputText] = useState("");
const [areaText, setText] = useState("");

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

  return (
    <div>
      <form>
        <input onChange={HandleChangeTitle} name="title" placeholder="Title" />
        <textarea  onChange={HandleChangeText}  name="content" placeholder="Take a note..." rows="3" />
        <button onClick= {submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
