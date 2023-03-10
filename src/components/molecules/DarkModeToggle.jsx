import React from 'react';
import { useTheme } from 'next-themes';
import { BsFillSunFill } from 'react-icons/bs';
import { MdDarkMode } from 'react-icons/md';

export default function DarkModeToggle() {
  // theme : 현재 값 가져오기 getter
  // setTheme : 현재 값 바꾸기 setter
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <button
        className='inline-flex items-center border-0 py-1 px-3 hover:text-indigo-500 rounded mt-4 md:mt-0 ml-4'
        type='button'
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      >
        {theme === 'dark' && <BsFillSunFill size={24} />}
        {theme === 'light' && <MdDarkMode size={24} />}
        <svg
          fill='none'
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          className='w-4 h-4 ml-1'
          viewBox='0 0 24 24'
        ></svg>
      </button>
    </div>
  );
}
