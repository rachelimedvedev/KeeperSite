import React,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [items, setItems] = useState([]);

  function addItem(inputText) {
    //adding the new items to the prev ones
    setItems((prevItems) => {
      return [...prevItems, inputText];
    }
  )
  }

  function deleteItem(id){
    //deleting the relevent item using the id
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea OnAdd={addItem}/>
              {items.map((todoItem, index) => (
              //rendering the notes using all items and there index as id
            <Note
              key={index}
              id={index}
              title={todoItem.title}
              content={todoItem.text}
              Ondel={deleteItem}
            />
          ))}
      <Footer />
    </div>
  );
}

export default App;
