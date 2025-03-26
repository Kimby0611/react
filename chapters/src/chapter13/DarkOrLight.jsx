import React, { useCallback, useState } from "react";
import ThemeContext from "../chapter_14/ThemeContext";
import MainContext from "../chapter_14/MainContext";

const DarkOrLight = () => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = useCallback(() => {
    if (theme == "light") {
      setTheme("dark");
    } else if (theme == "dark") {
      setTheme("light");
    }
  }, [theme]);
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <MainContext />
    </ThemeContext.Provider>
  );
};

export default DarkOrLight;
