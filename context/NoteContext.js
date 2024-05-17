import React, { createContext, useCallback, useEffect, useState } from "react";
import { formattedDateNTime } from "../utility/dates";
import { MMKV } from "react-native-mmkv";

export const storage = new MMKV();

export const NoteContext = createContext();

const NoteProvider = ({ children }) => {
  const [allNotes, setAllNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [noteId, setNoteId] = useState(null);
  // const [deletedNotes, setDeletedNotes] = useState([])

  useEffect(() => {
    const fetchData = () => {
      let keys = [];
      let values = [];

      try {
        keys = storage.getAllKeys();
        if (keys.length > 0) {
          values = keys.map((key) => {
            const value = storage.getString(key);
            return JSON.parse(value);
          });
          setAllNotes(values);
        } else {
          setAllNotes([]); // Empty array if no keys found
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const savingNote = useCallback(() => {
    if (!currentNote) {
      const newNoteId = noteId;
      const newNote = {
        title,
        description,
        noteId: newNoteId,
        editedAt: formattedDateNTime,
      };
      const storeData = (value, id) => {
        try {
          const jsonValue = JSON.stringify(value);
          storage.set(id, jsonValue);
        } catch (e) {
          console.error(e);
        }
      };

      // console.log(newNote, "New Note");
      storeData(newNote, newNoteId);
      setAllNotes([newNote, ...allNotes]);
      setTitle("");
      setDescription("");
    } else {
      const updatedNotes = allNotes.map((note) =>
        note.noteId === currentNote.noteId
          ? { ...note, title, description, editedAt: formattedDateNTime }
          : note
      );

      // Update the note in MMKV storage
      try {
        const updatedNote = updatedNotes.find(
          (note) => note.noteId === currentNote.noteId
        );
        if (updatedNote) {
          const jsonValue = JSON.stringify(updatedNote);
          storage.set(currentNote.noteId, jsonValue);
        }
      } catch (e) {
        console.error(e);
      }

      setAllNotes(updatedNotes);
      setCurrentNote(null);
    }
  }, [title, description, noteId, currentNote, allNotes]);

  const editNote = (note) => {
    setCurrentNote(note);
    setTitle(note.title);
    setDescription(note.description);
  };

  const deleteNote = (id) => {
    // const noteToDelete = allNotes.find((n) => n.noteId === id )
    // setDeletedNotes([noteToDelete, ...deletedNotes])
    const updatedNotes = allNotes.filter((note) => note.noteId !== id);
    try {
      storage.delete(id);
      setAllNotes(updatedNotes);
    } catch (e) {
      console.error(e);
    }
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
