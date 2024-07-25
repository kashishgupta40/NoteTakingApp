import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import EditPage from './pages/EditPage';

const App = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    setNotes(storedNotes);
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  const editNote = (updatedNote) => {
    setNotes(notes.map(note => (note.id === updatedNote.id ? updatedNote : note)));
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <HomePage 
            notes={notes} 
            addNote={addNote} 
            editNote={editNote} 
            deleteNote={deleteNote} 
          />
        </Route>
        <Route path="/edit/:id">
          <EditPage 
            notes={notes} 
            editNote={editNote} 
          />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
