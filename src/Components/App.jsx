import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);
  
  function addNote(inputData){
    setNotes((prevItems) =>{
      return [inputData, ...prevItems]
    });
  }

  return (
    <div>
      <Header />
      <CreateArea addNote={addNote}/>
      {notes.map((item, index) =>(
        <Note key={index} title={item.title} content={item.content} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
