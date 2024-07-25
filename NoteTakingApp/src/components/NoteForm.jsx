import React, {useState, useEffect} from 'react';

const NoteForm = ({ addNote, editNote, noteToEdit}) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = usestate('');

    useEffect(() => {
        if (noteToEdit) {
            setTitle(noteToEdit.title);
            setContent(noteToEdit.content);
        }
    }, [noteToEdit]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (noteToEdit) {
            editNote({...noteToEdit, title, content});
        } else {
            addNote({ id: Date.now(), title, content, timestamp: new Date().toLocalestring() });
        }
        setTitle('');
        setContent('');
    };

    return (
        <form onSubmit = {handleSubmit}>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
            <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Content" required />
                <button type="submit">Save Note</button>
        </form>
    );
};

export default NoteForm;