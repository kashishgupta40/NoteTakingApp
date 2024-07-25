import React, {useState} from 'react';
import NoteItem from './NoteItem';
import Pagination from './Pagination';


const NoteList = ({ notes, onEdit, onDelete, currentPage, totalPages, onPageChange }) => {
    const handlePageChange = (direction) => {
      if (direction === 'next' && currentPage < totalPages) {
        onPageChange(currentPage + 1);
      } else if (direction === 'prev' && currentPage > 1) {
        onPageChange(currentPage - 1);
      }
    };
  
    return (
      <div className="note-list">
        <ul>
          {notes.map(note => (
            <li key={note.id}>
              <h3>{note.title}</h3>
              <p>{note.content}</p>
              <small>{note.timestamp}</small>
              <button onClick={() => onEdit(note)}>Edit</button>
              <button onClick={() => onDelete(note.id)}>Delete</button>
            </li>
          ))}
        </ul>
        <div className="pagination">
          <button onClick={() => handlePageChange('prev')} disabled={currentPage === 1}>Previous</button>
          <span>Page {currentPage} of {totalPages}</span>
          <button onClick={() => handlePageChange('next')} disabled={currentPage === totalPages}>Next</button>
        </div>
      </div>
    );
  };
  
  export default NoteList;