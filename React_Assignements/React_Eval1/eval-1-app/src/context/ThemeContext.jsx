import {useContext,useState,createContext} from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({children})=>{
    const [theme,setTheme] =useState("light");
    const toggleTheme = ()=>{
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

    retunr (
        <ThemeContext.Provider value={{theme,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = ()=>{
    useContext(ThemeContext);
};