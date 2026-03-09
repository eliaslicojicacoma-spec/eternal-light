"use client";

import { useTheme } from "@/components/theme/ThemeProvider";

export function ThemeToggle() {
  const { theme, mounted, toggleTheme } = useTheme();

  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Toggle theme"
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-premium-dark/10 bg-white/60 text-premium-dark/70 shadow-sm backdrop-blur transition dark:border-white/10 dark:bg-white/5 dark:text-white/70"
      >
        <span className="text-xl">◐</span>
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={
        theme === "dark"
          ? "Switch to light mode"
          : "Switch to dark mode"
      }
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-premium-dark/10 bg-white/60 text-premium-dark shadow-sm backdrop-blur transition hover:scale-[1.05] hover:bg-white/80 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
    >
      <span className="text-2xl leading-none">
        {theme === "dark" ? "☀" : "☾"}
      </span>
    </button>
  );
}
