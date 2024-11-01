import React from "react";
import { Moon02Icon, Sun02Icon } from "hugeicons-react";
import { useTheme } from "../Contexts/ThemeContext";

export const ToggleBtn = () => {
  const { themeMode, darkMode, lightMode } = useTheme();

  const changeTheme = () => {
    themeMode === "light" ? darkMode() : lightMode();
  };

  return (
    <>
      <div className="btn">
        <button
          onClick={changeTheme}
          className="bg-gray-200 px-4 py-4 rounded-md"
        >
          {themeMode === "light" ? (
            <Moon02Icon color="black" size={22} />
          ) : (
            <Sun02Icon color="black" size={22} />
          )}
        </button>
      </div>
    </>
  );
};
