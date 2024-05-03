import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [autoTheme, setAutoTheme] = useState(null)

    return(
        <ThemeContext.Provider
            value={{
                autoTheme,
                setAutoTheme
            }}
        >
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider