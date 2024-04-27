import React, { createContext, useState } from "react";

export const DrawerContext = createContext();

const DrawerProvider = ({ children }) => {
    const [leftDrawerOpen, setLeftDrawerOpen] = useState(false)

    return(
        <DrawerContext.Provider
            value={{
                leftDrawerOpen,
                setLeftDrawerOpen,
            }}
        >
            {children}
        </DrawerContext.Provider>
    )
}

export default DrawerProvider