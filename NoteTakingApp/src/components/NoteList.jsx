import React from 'react';
import NoteItem from './NoteItem';
import Pagination from './Pagination';


const NoteList = ({ notes, onEdit, onDelete, currentPage, totalPages, onPageChange}) => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredNotes = notes.filter(note =>
        note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        note.content.toLowerCase().includes(searchTerm.toLowerCase())
    );


    return(
        <div>
            <input
            type="text"
            placeholder="Search notes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            />
            {filteredNotes.map(note => (

            <NoteItem key = {note.id} note={note} onEdit={onEdit} onDelete={onDelete} />
            ))}
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
        </div>
    );
};


export default NoteList;