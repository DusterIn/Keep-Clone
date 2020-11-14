import React, { useState } from 'react'
import './createnote.css';
import AddIcon from '@material-ui/icons/Add';

const CreateNote = (props) => {

    const [isExpanded, setExpanded] = useState(false)

    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    const handleChange = (event) => {
        const {name, value} = event.target;
        setNote(prevNote => {
            return {...prevNote, [name]: value}
        })
    }

    const submitNote = () => {
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        });
    }

    const expand = () => {
        setExpanded(true);
    }

    return (
        <div className="createNote">
            {isExpanded && <input onChange={handleChange} name="title" value={note.title} placeholder="Title"  />}
            <textarea onClick={expand} onChange={handleChange} name="content" value={note.content} placeholder="Take a note..." rows={isExpanded ? 3 : 1}></textarea>
            {isExpanded ? 
            <button onClick={submitNote}>
            <AddIcon style={{fontSize: 15}} />
        </button> : null}
        </div>
    )
}

export default CreateNote
