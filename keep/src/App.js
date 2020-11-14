import React, { useState } from 'react';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Note from './Note';
import CreateNote from './CreateNote';


const App = () => {

  const [notes, setNotes] = useState([]);

  const addNote = (newNote) => {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    })
  }

  const deleteNote = (id) => {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="App">
      <Header />
      <CreateNote onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return <Note
        id={index}
        key={index}
        title={noteItem.title}
        content={noteItem.content}
        onDelete={deleteNote}
        />
      })}
      <Footer />
    </div>
  );
}

export default App;
