import React, { useState, createContext } from "react";
import { IThemeProps, IChildren } from "./themeContext";

const IThemeContext = createContext({} as IThemeProps);

export const IThemeProvider = ({ children }: IChildren) => {
  const [Itheme, setITheme] = useState("light");

  const value = {
    Itheme,
    setITheme,
  };

  return (
    <IThemeContext.Provider value={value}> {children} </IThemeContext.Provider>
  );
};

export default IThemeContext;
