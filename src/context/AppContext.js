import { createContext, useState } from "react";
import { Routes } from "../assets/routes";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
    const [activeLink, setActiveLink] = useState(Routes.HomeScreen);

    return (
        <AppContext.Provider value={{ activeLink, setActiveLink }}>
            {children}
        </AppContext.Provider>
    );
};