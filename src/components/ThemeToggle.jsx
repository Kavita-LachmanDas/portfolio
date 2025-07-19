import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <label className="flex items-center cursor-pointer">
      <div className="relative">
        <input
          type="checkbox"
          className="sr-only"
          onChange={toggleTheme}
          checked={theme === "dark"}
        />
        <div className="block bg-gray-400 w-14 h-8 rounded-full"></div>
        <div
          className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition ${
            theme === "dark" ? "translate-x-6" : ""
          }`}
        ></div>
      </div>
      <span className="ml-3 text-sm text-gray-700 dark:text-gray-300">
        {theme === "light" ? "Light Mode" : "Dark Mode"}
      </span>
    </label>
  );
};

export default ThemeToggle;
