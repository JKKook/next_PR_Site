import React from 'react';
import Image from 'next/image';
import jk from '../../../public/jk.png';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  return (
    <>
      <section className='text-gray-600 body-font'>
        <div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
          <div className='lg:max-w-xs lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0'>
            <Image
              className='object-cover object-center rounded-full'
              src={jk}
              alt='my profile'
            />
          </div>
          <div className='lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center dark:text-white'>
            <h1 className='title-font sm:text-2xl text-3xl mb-4 font-medium text-gray-900 dark:text-white'>
              안녕하세요. 프론트엔드 개발자 이종국입니다. <br />
            </h1>
            <p>
              새로운 것을 받아들이는데 거리낌이 없습니다. 새로운 지식을 쌓는데
              흥미를 갖고 있기 때문입니다 <br />
              개발 영역을 확장하고자 합니다. <br />
              제가 생각하는 개발 영역은 유저가 필요로 되는 어느 곳이든
              적용된다고 생각합니다 <br />
              따라서, 웹을 넘어서 모바일, 키오스크, 가상현실 등의 영역을
              확장하고자 합니다
            </p>
            <p className='mb-8 leading-relaxed'></p>
            <div className='flex justify-center'>
              <button
                className='inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'
                onClick={() => router.push('/MyProjects')}
              >
                프로젝트 보러가기
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
