import React, { createContext, useState } from "react";
import { router } from "expo-router";

export const NoteContext = createContext();

const NoteProvider = ({ children }) => {
  const [allNotes, setAllNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [noteId, setNoteId] = useState(null);

  const tempNoteId = allNotes.length + 1;
  // const date = new Date();

  const savingNote = () => {
    if (currentNote) {
      // update existing note
      const updatedNotes = allNotes.map((note) =>
        note.noteId === currentNote.noteId
          ? { ...note, title, description, editedAt: new Date().toLocaleString() }
          : note
      );
      setAllNotes(updatedNotes);
      setCurrentNote(null);
    } else {
      const newNote = {
        title: title,
        description: description,
        noteId: tempNoteId,
        editedAt: new Date().toLocaleString(),
      };
      setAllNotes([newNote, ...allNotes]);
      setTitle("");
      setNoteId(tempNoteId);
      setDescription("");
    }
    router.navigate("/");
  };

  const editNote = (note) => {
    setCurrentNote(note);
    setTitle(note.title)
    setDescription(note.description)
    router.push("/addNote");
  };  

  const deleteNote = (id) => {
      const updatedNotes = allNotes.filter((note) => note.noteId !== id);
      setAllNotes(updatedNotes);
      console.log("Note deleted");
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
      }}
    >
      {children}
    </NoteContext.Provider>
  );
};

export default NoteProvider;
