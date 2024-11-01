import React, { useEffect, useState } from "react";
import { Wrapper } from "./Components/Wrapper";
import { ThemeProvider } from "./Contexts/ThemeContext";

export const App = () => {
  const [themeMode, setThemeMode] = useState("llight");

  const darkMode = () => {
    setThemeMode("dark");
  };

  const lightMode = () => {
    setThemeMode("light");
  };

  // changing Theme

  useEffect(() => {
    const root = document.querySelector("html");
    root.classList.remove("light", "dark");
    root.classList.add(themeMode);
  }, [themeMode]);

  return (
    <>
      <ThemeProvider value={{ themeMode, darkMode, lightMode }}>
        <Wrapper />
      </ThemeProvider>
    </>
  );
};
