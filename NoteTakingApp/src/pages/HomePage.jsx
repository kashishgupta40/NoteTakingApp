import React, { useState } from 'react';
import NoteForm from '../components/NoteForm';
import NoteList from '../components/NoteList';

const HomePage = ({ notes, addNote, editNote, deleteNote }) => {
  const [noteToEdit, setNoteToEdit] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const notesPerPage = 10;

  const onEdit = (note) => {
    setNoteToEdit(note);
  };

  const indexOfLastNote = currentPage * notesPerPage;
  const indexOfFirstNote = indexOfLastNote - notesPerPage;
  const currentNotes = notes.slice(indexOfFirstNote, indexOfLastNote);

  const totalPages = Math.ceil(notes.length / notesPerPage);

  return (
    <div>
      <header>
        <h1> Note Taking App</h1>
      </header>
      <NoteForm addNote={addNote} editNote={editNote} noteToEdit={noteToEdit} />
      <NoteList
        notes={currentNotes}
        onEdit={onEdit}
        onDelete={deleteNote}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default HomePage;
