import React, { useState } from "react";

function CreateArea(props) {
    const [noteData, setNoteData] = useState({
        title: "",
        content: ""
    });

    function handleChange(event){
        const {name, value} = event.target;
        setNoteData((preVal) => {
            return {
                ...preVal,
                [name]: value
            }
        })
    }

    function submitNote(event){
        props.addNote(noteData);
        event.preventDefault();
        setNoteData({
            title: "",
            content: ""
        })
    }
    

    return (
        <div>
        <form>
            <input onChange={handleChange} name="title" value={noteData.title} placeholder="Title" />
            <textarea onChange={handleChange}  name="content" value={noteData.content} placeholder="Take a note..." rows="3" />
            <button onClick={submitNote}>Add</button> 
        </form>
        </div>
    );
}

export default CreateArea;