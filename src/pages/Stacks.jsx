import React from 'react';
import Image from 'next/image';
import html from '../../public/images/html.png';
import css from '../../public/images/css.png';
import js from '../../public/images/js.png';
import git from '../../public/images/git.png';
import firebase from '../../public/images/firebase.png';
import iterm from '../../public/images/iterm.png';
import mysql from '../../public/images/mysql.png';
import next from '../../public/images/next.png';
import ts from '../../public/images/ts.png';
import react from '../../public/images/react.png';

export default function Stacks() {
  return (
    <>
      <section className='text-gray-600 body-font dark:text-white'>
        <div className='container px-5 py-24 mx-auto'>
          <div className='flex flex-wrap w-full mb-20 flex-col items-center text-center'>
            <h1 className='sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900 dark:text-white'>
              Build Stacks
            </h1>
            <p className='lg:w-1/2 w-full leading-relaxed text-gray-500 dark:text-white'>
              프론트엔드 개발자로서 쌓은 스텍입니다! <br />
              학문 특성 상 완벽하기란 어렵겠지만, <br />
              필요에 따라서 적절하게 사용할 수 있도록 갈고 닦아가는 중입니다
            </p>
          </div>
          <div className='flex flex-wrap -m-4 '>
            <div className='xl:w-1/3 md:w-1/2 p-4 '>
              <div className='border border-gray-200 p-6 rounded-lg'>
                <div className='inline-flex items-center justify-center mb-8'>
                  <Image
                    className='mr-4'
                    src={html}
                    alt='html-icon'
                    width={50}
                    height={50}
                  />
                  <Image
                    className='mr-6'
                    src={css}
                    alt='css-icon'
                    width={50}
                    height={50}
                  />
                </div>

                <h2 className='text-lg text-gray-900 font-medium title-font mb-2 dark:text-white'>
                  Web-basic
                </h2>
                <p className='leading-relaxed text-base'>
                  W3C권장하는 마크업을 준수하며,
                  <br />
                  RenderingPath를 이해하며 퍼블리싱 하고 있습니다
                </p>
              </div>
            </div>
            <div className='xl:w-1/3 md:w-1/2 p-4 '>
              <div className='border border-gray-200 p-6 rounded-lg'>
                <div className='inline-flex items-center justify-center mb-8'>
                  <Image
                    className='mr-6'
                    src={js}
                    alt='js-icon'
                    width={50}
                    height={50}
                  />
                  <Image
                    className='mr-6'
                    src={ts}
                    alt='ts-icon'
                    width={50}
                    height={50}
                  />
                </div>

                <h2 className='text-lg text-gray-900 font-medium title-font mb-2 dark:text-white'>
                  Program Language
                </h2>
                <p className='leading-relaxed text-base'>
                  Browser의 동작원리 인 Critical RenderingPath를 이해하며
                  <br />
                  객체지향 프로그래밍(OOP) 학습하고 있습니다
                </p>
              </div>
            </div>
            <div className='xl:w-1/3 md:w-1/2 p-4 '>
              <div className='border border-gray-200 p-6 rounded-lg'>
                <div className='inline-flex items-center justify-center mb-8'>
                  <Image
                    className='mr-6'
                    src={react}
                    alt='react-icon'
                    width={50}
                    height={50}
                  />
                  <Image
                    className='mr-6'
                    src={next}
                    alt='next-icon'
                    width={50}
                    height={50}
                  />
                </div>

                <h2 className='text-lg text-gray-900 font-medium title-font mb-2 dark:text-white'>
                  Library
                </h2>
                <p className='leading-relaxed text-base'>
                  컴포넌트의 대한 이해도를 높이고
                  <br />
                  Recoil, Reducer을 통해 상태관리를 하며
                  <br />
                  코드의 효율성을 높이려고 노력합니다
                </p>
              </div>
            </div>
            <div className='xl:w-1/3 md:w-1/2 p-4 '>
              <div className='border border-gray-200 p-6 rounded-lg'>
                <div className='inline-flex items-center justify-center mb-8'>
                  <Image
                    className='mr-6'
                    src={git}
                    alt='git-icon'
                    width={50}
                    height={50}
                  />
                  <Image
                    className='mr-6'
                    src={iterm}
                    alt='iterm-icon'
                    width={50}
                    height={50}
                  />
                </div>

                <h2 className='text-lg text-gray-900 font-medium title-font mb-2 dark:text-white'>
                  Version Control
                </h2>
                <p className='leading-relaxed text-base'>
                  터미널 명령어를 통해 프로젝트의
                  <br />
                  history, branch, tag 등등 <br />
                  버전 관리에 힘쓰고 있습니다
                </p>
              </div>
            </div>
            <div className='xl:w-1/3 md:w-1/2 p-4 '>
              <div className='border border-gray-200 p-6 rounded-lg'>
                <div className='inline-flex items-center justify-center mb-8'>
                  <Image
                    className='mr-6'
                    src={firebase}
                    alt='firebase-icon'
                    width={50}
                    height={50}
                  />
                  <Image
                    className='mr-6'
                    src={mysql}
                    alt='mysql-icon'
                    width={50}
                    height={50}
                  />
                </div>

                <h2 className='text-lg text-gray-900 font-medium title-font mb-2 dark:text-white'>
                  RDBMS
                </h2>
                <p className='leading-relaxed text-base'>
                  관계형데이터 베이스에 대한 이해도가 있습니다
                  <br />
                  Firebase와 MySQL을 다뤄본 경험이 있습니다
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
