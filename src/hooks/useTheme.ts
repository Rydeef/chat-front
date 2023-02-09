import { useState, useLayoutEffect } from 'react';

const IS_SYSTEM_THEME = window.matchMedia(
  '(prefers-color-scheme: dark)'
).matches;

const SYSTEM_THEME = IS_SYSTEM_THEME ? 'dark' : 'light';

export const useTheme = () => {
  const currentTheme = window.localStorage.getItem('theme');

  const [theme, setTheme] = useState(currentTheme || SYSTEM_THEME);

  useLayoutEffect(() => {
    document.documentElement.setAttribute('class', theme);
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

  return { theme, setTheme, toggleTheme };
};
