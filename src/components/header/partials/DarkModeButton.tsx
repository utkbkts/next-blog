import React from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { FaMoon, FaSun } from "react-icons/fa";
const DarkModeButton = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div>
      <Button
        type="button"
        aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
        title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
        className="w-10 h-9 cursor-pointer"
        color="gray"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        {theme === "light" ? <FaSun /> : <FaMoon />}
      </Button>
    </div>
  );
};

export default DarkModeButton;
