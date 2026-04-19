"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();  // ✅ FIXED
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // ✅ avoid hydration issues

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="border px-3 py-1 rounded"
    >
      Toggle {theme === "dark" ? "Light" : "Dark"} Mode
    </button>
  );
};

export default ThemeSwitch;