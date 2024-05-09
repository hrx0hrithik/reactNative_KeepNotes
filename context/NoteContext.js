import React, { createContext, useEffect, useState } from "react";
import { formattedDateNTime } from "../utility/dates";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const NoteContext = createContext();

const NoteProvider = ({ children }) => {
  const [allNotes, setAllNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [noteId, setNoteId] = useState(null);
  // const [deletedNotes, setDeletedNotes] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      let keys = [];
      let values = null;
  
      try {
        keys = await AsyncStorage.getAllKeys();
        if (keys.length > 0) {
          values = await AsyncStorage.multiGet(keys);
  
          // Parse JSON strings and accumulate objects
          const parsedValues = values.map(([key, value]) => JSON.parse(value));
          // console.log(parsedValues);
          setAllNotes(parsedValues);
        } else {
          setAllNotes([]); // Empty array if no keys found
        }
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchData();
  }, []);
  

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
      const storeData = async (value, id) => {
        try {
          const jsonValue = JSON.stringify(value);
          await AsyncStorage.setItem(id, jsonValue);
        } catch (e) {
          console.error(e);
        }
      };
      storeData(newNote, noteId);
      setAllNotes([newNote, ...allNotes]);
      setTitle("");
      setDescription("");
    }
    // console.log(noteId);
  };

  const editNote = (note) => {
    setCurrentNote(note);
    setTitle(note.title);
    setDescription(note.description);
  };

  const deleteNote = async(id) => {
    // const noteToDelete = allNotes.find((n) => n.noteId === id )
    // setDeletedNotes([noteToDelete, ...deletedNotes])
    const updatedNotes = allNotes.filter((note) => note.noteId !== id);
    try {
      await AsyncStorage.removeItem(id)
      setAllNotes(updatedNotes);
    } catch(e) {
      console.error(e)
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
