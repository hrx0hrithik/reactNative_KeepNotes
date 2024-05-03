import React, { createContext, useState } from "react";
import { router } from "expo-router";

export const NoteContext = createContext();

const NoteProvider = ({ children }) => {
  const [allNotes, setAllNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [noteId, setNoteId] = useState(null);
  // const [deletedNotes, setDeletedNotes] = useState([])

  // const tempNoteId = allNotes.length + 1;

  const savingNote = () => {
    if (currentNote) {
      // update existing note
      const updatedNotes = allNotes.map((note) =>
        note.noteId === currentNote.noteId
          ? { ...note, title, description, editedAt: new Date() }
          : note
      );
      setAllNotes(updatedNotes);
      setCurrentNote(null);
    } else {
      const newNote = {
        title: title,
        description: description,
        noteId: noteId,
        editedAt: new Date().toLocaleString(),
      };
      setAllNotes([newNote, ...allNotes]);
      setTitle("");
      setDescription("");
    }
    console.log(noteId)
  };

  const editNote = (note) => {
    setCurrentNote(note);
    setTitle(note.title)
    setDescription(note.description)
  };  

  const deleteNote = (id) => {
      // const noteToDelete = allNotes.find((n) => n.noteId === id )
      // setDeletedNotes([noteToDelete, ...deletedNotes])
      const updatedNotes = allNotes.filter((note) => note.noteId !== id);
      setAllNotes(updatedNotes);
  };

  return (
    <NoteContext.Provider
      value={{
        currentNote,
        setCurrentNote,
        allNotes,
        setAllNotes,
        description,
        setDescription,
        title,
        setTitle,
        savingNote,
        editNote,
        deleteNote,
        noteId,
        setNoteId,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
};

export default NoteProvider;
