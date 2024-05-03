import React, { createContext, useState } from "react";

export const AddnoteModalContext = createContext();

const AddnoteModalProvider = ({ children }) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <AddnoteModalContext.Provider
      value={{
        openModal,
        setOpenModal,
      }}
    >
      {children}
    </AddnoteModalContext.Provider>
  );
};

export default AddnoteModalProvider;
