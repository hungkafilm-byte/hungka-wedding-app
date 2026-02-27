import React, { useState } from 'react';
import { Trash2, CheckCircle, Plus } from 'lucide-react';

const HungkaWeddingApp = () => {
  const [notes, setNotes] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addNote = () => {
    if (inputValue.trim()) {
      setNotes([...notes, { id: Date.now(), text: inputValue, completed: false }]);
      setInputValue('');
    }
  };

  const toggleComplete = (id) => {
    setNotes(notes.map(note => 
      note.id === id ? { ...note, completed: !note.completed } : note
    ));
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8 font-sans">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="bg-pink-600 p-6 text-white text-center">
          <h1 className="text-2xl font-bold tracking-wider">HUNGKA WEDDING</h1>
          <p className="text-sm opacity-80">Quản lý công việc sự kiện</p>
        </div>

        <div className="p-6">
          <div className="flex gap-2 mb-6">
            <input 
              type="text" 
              className="flex-1 border-b-2 border-gray-200 focus:border-pink-500 outline-none px-2 py-1"
              placeholder="Thêm việc cần làm..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && addNote()}
            />
            <button onClick={addNote} className="bg-pink-500 text-white p-2 rounded-full hover:bg-pink-600 transition">
              <Plus size={20} />
            </button>
          </div>

          <div className="space-y-3">
            {notes.map(note => (
              <div key={note.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg group">
                <div className="flex items-center gap-3">
                  <button onClick={() => toggleComplete(note.id)}>
                    <CheckCircle className={note.completed ? "text-green-500" : "text-gray-300"} />
                  </button>
                  <span className={`${note.completed ? "line-through text-gray-400" : "text-gray-700"}`}>
                    {note.text}
                  </span>
                </div>
                <button onClick={() => deleteNote(note.id)} className="text-red-400 opacity-0 group-hover:opacity-100 transition">
                  <Trash2 size={18} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HungkaWeddingApp;
