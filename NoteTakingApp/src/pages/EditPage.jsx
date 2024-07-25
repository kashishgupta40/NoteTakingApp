// src/pages/EditPage.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import NoteForm from '../components/NoteForm';

const EditPage = ({ notes, editNote }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const noteToEdit = notes.find(note => note.id === parseInt(id));

  const handleEditNote = (updatedNote) => {
    editNote(updatedNote);
    navigate('/');
  };

  return (
    <div>
      <NoteForm addNote={handleEditNote} noteToEdit={noteToEdit} />
    </div>
  );
};

export default EditPage;
