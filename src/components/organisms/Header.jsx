import React from 'react';
import Link from 'next/link';
import { INFO_LIST } from '../../pages/api/homeData';
import DarkModeToggle from '../molecules/DarkModeToggle';
import { RxNotionLogo } from 'react-icons/rx';
import { useRouter } from 'next/router';

export default function Header() {
  const router = useRouter();
  return (
    <div>
      <header className='text-gray-600 body-font dark:text-white'>
        <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
          <a className='flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 focus:pointer-events-auto'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              className='w-10 h-10 text-white p-2 bg-indigo-500 rounded-full'
              viewBox='0 0 24 24'
              onClick={() => router.push('/')}
            >
              <path d='M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'></path>
            </svg>
            <span
              className='ml-3 text-xl dark:text-white'
              onClick={() => router.push('/')}
            >
              Kooks PortFolio
            </span>
          </a>
          <nav className='md:ml-auto flex flex-wrap items-center text-base justify-center cursor-pointer'>
            {INFO_LIST.map((info) => {
              return (
                <li
                  className='list-none mr-10 hover:text-gray-900 dark:hover:text-red-400'
                  key={info.id}
                >
                  <Link href={info.link}>{info.title}</Link>
                </li>
              );
            })}
          </nav>
          <a
            target='_blank'
            href='https://veil-shock-17c.notion.site/0a2ae46899fe4ee49cc1c4d120906a40?v=8b7816763cfc43b8904376806afb1022'
          >
            <button className='inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 dark:text-black'>
              Traces
              <svg
                fill='none'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                className='w-4 h-4 ml-1'
                viewBox='0 0 24 24'
              >
                <path d='M5 12h14M12 5l7 7-7 7'></path>
              </svg>
              <RxNotionLogo size={24} className='ml-2' />
            </button>
          </a>
          <div>
            <DarkModeToggle />
          </div>
        </div>
      </header>
    </div>
  );
}
