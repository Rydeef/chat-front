import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import { ReactComponent as SunSVG } from '../../assets/sun.svg';
import { ReactComponent as MoonSVG } from '../../assets/moon.svg';

const SwitchTheme = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className='w-10 h-10 flex items-center justify-center p-1 rounded-lg cursor-pointer bg-white duration-500 dark:bg-black dark:fill-white'
      onClick={toggleTheme}
    >
      {theme === 'light' ? <SunSVG /> : <MoonSVG />}
    </div>
  );
};

export default SwitchTheme;
