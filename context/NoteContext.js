import React, { createContext, useState } from "react";

export const NoteContext = createContext();

const NoteProvider = ({ children }) => {

    const notes = [
        {
          title: "This is first Note",
          description: "Text will go here ",
          noteId: 1,
          image: null,
          list: [],
        },
        {
          title: "This is second Note",
          description: "Text will go here ",
          noteId: 2,
          image: null,
          list: [],
        },
        {
          title: "This is third Note",
          description: "Text will go here ",
          noteId: 3,
          image: null,
          list: [],
        },
        {
          title: "This is forth Note",
          description: "Text will go here ",
          noteId: 4,
          image: null,
          list: [],
        },
        {
          title: "This is fifth Note",
          description: "Text will go here ",
          noteId: 5,
          image: null,
          list: [],
        },
        {
          title: "This is sixth Note",
          description: "Text will go here ",
          noteId: 6,
          image: null,
          list: [],
        },
        {
          title: "This is seventh Note",
          description:
            "Text will go here Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
          noteId: 7,
          image: null,
          list: [],
        },
        {
          title: "This is eighth Note",
          description: "Text will go here ",
          noteId: 8,
          image: null,
          list: [],
        },
      ];

  const [allNotes, setAllNotes] = useState(notes);
  const [currentNote, setCurrentNote] = useState({});

  return (
    <NoteContext.Provider
      value={{
        currentNote,
        setCurrentNote,
        allNotes,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
};

export default NoteProvider;
