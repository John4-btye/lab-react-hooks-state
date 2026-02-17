import React from "react";

function DarkModeToggle({ darkMode, setDarkMode }) {
  {/* Function to toggle between light modes */}
  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <button onClick={toggleMode}>
      {darkMode ? "Toggle Light Mode" : "Toggle Dark Mode"}
    </button>
  );
}

export default DarkModeToggle;
