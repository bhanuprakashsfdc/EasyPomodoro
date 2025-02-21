// src/components/Notepad.jsx
import React, { useState } from 'react';

const Notepad = () => {
  const [note, setNote] = useState('');
  const [savedNotes, setSavedNotes] = useState([]);

  const handleChange = (event) => {
    setNote(event.target.value);
  };

  const handleSave = () => {
    if (note.trim()) {
      setSavedNotes([...savedNotes, note]);
      setNote('');
    }
  };

  const handleClear = () => {
    setNote('');
  };

  return (
    <div className="notepad-container p-4 max-w-md mx-auto mt-10 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Notepad</h1>
      <textarea
        value={note}
        onChange={handleChange}
        placeholder="Write your notes here..."
        className="w-full h-40 p-2 border border-gray-300 rounded-lg"
      />
      <div className="mt-4 flex justify-between">
        <button
          onClick={handleSave}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Save Note
        </button>
        <button
          onClick={handleClear}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
        >
          Clear
        </button>
      </div>
      {savedNotes.length > 0 && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold">Saved Notes</h2>
          <ul className="list-disc pl-5 mt-2">
            {savedNotes.map((note, index) => (
              <li key={index} className="mb-2">
                {note}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Notepad;
