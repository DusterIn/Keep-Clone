import React from 'react';
import './Note.css';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

const Note = (props) => {

    const handleClick = () => {
        props.onDelete(props.id)
    }

    return (
        <div className="note">
            <div className="note__card">
                <h1>{props.title}</h1>
                <p>{props.content}</p>
                <button onClick={handleClick}> 
                    <DeleteOutlineIcon style={{fontSize: 13}} /> 
                </button>
            </div>
        </div>
    );
}

export default Note
