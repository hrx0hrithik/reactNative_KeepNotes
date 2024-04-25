import React, { createContext, useState } from "react";

export const NoteContext = createContext();

const NoteProvider = ({ children }) => {

    let notes = [ ];

  const [allNotes, setAllNotes] = useState(notes);
  const [currentNote, setCurrentNote] = useState({});

  return (
    <NoteContext.Provider
      value={{
        currentNote,
        setCurrentNote,
        allNotes,
        setAllNotes,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
};

export default NoteProvider;
