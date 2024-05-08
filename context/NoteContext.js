import React, { createContext, useEffect, useState } from "react";
import { formattedDateNTime } from "../utility/dates";
import { storage } from "../utility/mmkv";

export const NoteContext = createContext();

const NoteProvider = ({ children }) => {
  const [allNotes, setAllNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [noteId, setNoteId] = useState(null);
  // const [deletedNotes, setDeletedNotes] = useState([])

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
        editedAt: formattedDateNTime,
      };
      storage.set(noteId, JSON.stringify(newNote));
      setAllNotes([newNote, ...allNotes]);
      setTitle("");
      setDescription("");
    }
    console.log(noteId);
  };

  const editNote = (note) => {
    setCurrentNote(note);
    setTitle(note.title);
    setDescription(note.description);
  };

  const deleteNote = (id) => {
    // const noteToDelete = allNotes.find((n) => n.noteId === id )
    // setDeletedNotes([noteToDelete, ...deletedNotes])
    const updatedNotes = allNotes.filter((note) => note.noteId !== id);
    setAllNotes(updatedNotes);
  };

  useEffect(() => {
    const fetchNotes = async () => {
      const keys = storage.getAllKeys();
      const notes = {};

      await Promise.all(
        keys.map(async (key) => {
          const noteString = storage.getString(key);
          const note = JSON.parse(noteString);
          notes[key] = note;
        })
      );

      setAllNotes(notes);
    };

    fetchNotes();
  }, []);

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
