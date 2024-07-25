import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import NoteForm from '../components/NoteForm';

const EditPage = ({ notes, editNote }) => {
  const { id } = useParams();
  const history = useHistory();
  const noteToEdit = notes.find(note => note.id === parseInt(id));

  const handleEditNote = (updatedNote) => {
    editNote(updatedNote);
    history.push('/');
  };

  return (
    <div>
      <NoteForm addNote={handleEditNote} noteToEdit={noteToEdit} />
    </div>
  );
};

export default EditPage;
