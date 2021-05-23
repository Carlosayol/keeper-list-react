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

  function deleteNote(id){
    setNotes((prevItems) => {
      return prevItems.filter((item, index) => {
        return index!=id;
      })
    })
  }

  return (
    <div>
      <Header />
      <CreateArea addNote={addNote}/>
      {notes.map((item, index) =>(
        <Note key={index} id={index} title={item.title} wDelete={deleteNote} content={item.content} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
