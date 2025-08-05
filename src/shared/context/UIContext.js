import { createContext, useContext, useEffect, useState } from "react";

const UIContext = createContext();

export const UIProvider = ({ children }) => {
    // Detectar el tema preferido del sistema al cargar
    const getSystemTheme = () => {
        return window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light";
    };

    const [theme, setTheme] = useState(getSystemTheme());

    const handleChangeTheme = () => setTheme((prev) => (prev === "dark" ? "light" : "dark"));

    // Aplicar clase al <html> para activar las variables CSS
    useEffect(() => {
        const root = document.documentElement;

        if (theme === "dark") {
            root.classList.add("theme-dark");
            root.classList.remove("theme-light");
        } else {
            root.classList.add("theme-light");
            root.classList.remove("theme-dark");
        }
    }, [theme]);

    const contextValue = {
        theme,
        handleChangeTheme,
    };

    return (
        <UIContext.Provider value={contextValue}>
            {children}
        </UIContext.Provider>
    );
};

export const useUI = () => useContext(UIContext);