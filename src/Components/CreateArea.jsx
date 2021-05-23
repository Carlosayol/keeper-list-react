import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {

    const [isExpanded, setExpanded] = useState(false);

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

    function expand(){
        setExpanded(true);
    }
    

    return (
        <div>
        <form className="create-note">
        {isExpanded &&
            <input onChange={handleChange} name="title" value={noteData.title} placeholder="Title" />}
            <textarea onChange={handleChange} onClick={expand} name="content" value={noteData.content} placeholder="Take a note..." rows={isExpanded?3:1} />
            <Zoom in={isExpanded}>
                <Fab onClick={submitNote}><AddIcon /></Fab> 
            </Zoom>
        </form>
        </div>
    );
}

export default CreateArea;