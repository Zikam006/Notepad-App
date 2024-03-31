import "notepad.css"
import { useState, useEffect } from "react";


const Notepad = () => {
  const [notes, setNotes] = useState([]);

  const addNote = () => {
    const newNote = {
      title: '',
      content: '',
      images: [],
      formatting: {
        bold: false,
        italic: false,
        underline: false,
        font: 'Arial',
      },
    };

    setNotes([...notes, newNote]);
  };

  const handleNoteChange = (index, field, value) => {
    const updatedNotes = [...notes];
    updatedNotes[index][field] = value;
    setNotes(updatedNotes);
  };

  const handleImageUpload = (index, image) => {
    const updatedNotes = [...notes];
    updatedNotes[index].images.push(image);
    setNotes(updatedNotes);
  };

  const handleFormattingChange = (index, style, value) => {
    const updatedNotes = [...notes];
    updatedNotes[index].formatting[style] = value;
    setNotes(updatedNotes);
  };

  return (
    <div>
      <button onClick={addNote}>Add Note</button>
      {notes.map((note, index) => (
        <div key={index}>
          <input
            type="text"
            value={note.title}
            onChange={(e) => handleNoteChange(index, 'title', e.target.value)}
          />
          <textarea
            value={note.content}
            onChange={(e) => handleNoteChange(index, 'content', e.target.value)}
          />
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleImageUpload(index, e.target.files[0])}
          />
          <div>
            <button
              onClick={() =>
                handleFormattingChange(index, 'bold', !note.formatting.bold)
              }
            >
              Bold
            </button>
            <button
              onClick={() =>
                handleFormattingChange(index, 'italic', !note.formatting.italic)
              }
            >
              Italic
            </button>
            <button
              onClick={() =>
                handleFormattingChange(
                  index,
                  'underline',
                  !note.formatting.underline
                )
              }
            >
              Underline
            </button>
            <select
              value={note.formatting.font}
              onChange={(e) =>
                handleFormattingChange(index, 'font', e.target.value)
              }
            >
              <option value="Arial">Arial</option>
              <option value="Times New Roman">Times New Roman</option>
              <option value="Courier New">Courier New</option>
              <option value="Verdana">Verdana</option>
            </select>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Notepad;