import React from 'react';
import Image from 'next/image';
import todolist from '../../../public/images/todolist.gif';
import signin from '../../../public/images/signin.gif';
import myyoutube from '../../../public/images/myyoutube.gif';
import kakao from '../../../public/images/kakao.png';
import chatbot from '../../../public/images/chatbot.png';
import carrot from '../../../public/images/carrot.png';
import youtubeIcon from '../../../public/images/youtubeIcon.webp';
import { getRGBColor } from '@/utils/changeRGB';
import { useRouter } from 'next/router';

export default function ProjectItem({ datas }) {
  // variables
  const projectIcon = datas.icon.emoji;
  const projectTitle = datas.properties.이름.title[0].plain_text;
  const projectGit = datas.properties.Github.url;
  const projectCreatedAt = datas.properties.생성일.created_time;
  const projectDescription = datas.properties.설명.rich_text;
  const projectTag = datas.properties.태그.multi_select;
  console.log(projectTag);

  // // change RGB
  // const primaryColor = getRGBColor(
  //   projectTag.map((val) => val.color),
  //   'primary',
  // );

  return (
    <div className='flex shadow-md justify-between items-center'>
      <div className='flex ml-4 pd-4 basis-1/4 flex-col p-4'>
        <div className='flex flex-row'>
          <h1 className='text-2xl mr-4'>
            {projectIcon ? (
              projectIcon
            ) : (
              <Image src={youtubeIcon} alt='youtube icon' width='50' />
            )}
          </h1>
          <h1 className='text-2xl font-bold'>{projectTitle}</h1>
        </div>
        <span className='text-gray-500 mt-4 inline text-lg truncate w-48 list-disc'>
          생성일 : {projectCreatedAt}
        </span>
        <form>
          <ul className='list-disc'>
            <li>
              {projectDescription.map((desc) => (
                <h3 className='text-lg' key={desc}>
                  {desc.plain_text}
                </h3>
              ))}
            </li>
            <li>
              <a
                className='text-lg no-underline hover:underline'
                href={projectGit}
              >
                Github : Git 바로가기
              </a>
            </li>
            <li className='mt-4 flex flex-row flex-wrap gap-1 list-none'>
              {projectTag.map((tags) => (
                <em
                  // bg-indigo-500
                  // <div className={'absolute inset-0 ' + (click ? 'translate-x-0' : '-translate-x-full') + ' transform z-400 h-screen w-1/4 bg-blue-300'}></div>
                  // <div className={`absolute inset-0 ${click ? 'translate-x-0' : '-translate-x-full'} transform z-400 h-screen w-1/4 bg-blue-300`}></div>

                  className={`px-2 py-1 mr-2 text-white rounded-md dark:bg-sky-700 w-30 ${
                    tags.color ? 'bg-indigo-500' : 'bg-red-500'
                  }`}
                  key={tags.id}
                >
                  {tags.name}
                </em>
              ))}
            </li>
          </ul>
        </form>
      </div>

      <div className='flex flex-row basis-1/2 justify-end items-center mt-6 mb-6'>
        {projectGit === 'https://github.com/JKKook/team_project_playbook' && (
          <Image
            className='rounded-t-xl'
            src={signin}
            alt='next-signin'
            width='400'
          />
        )}
        {projectTitle === 'Youtube Clone' && (
          <Image
            className='rounded-t-xl'
            src={myyoutube}
            alt='youtube-clone'
            width='400'
          />
        )}
        {projectTitle === 'React_TodoList' && (
          <Image
            className='rounded-t-xl'
            src={todolist}
            alt='react-todolist'
            width='400'
          />
        )}
        {projectTitle === 'Kakao-Map' && (
          <Image
            className='rounded-t-xl'
            src={kakao}
            alt='kakao-api'
            width='400'
          />
        )}
        {projectTitle === 'ChatBot' && (
          <Image
            className='rounded-t-xl'
            src={chatbot}
            alt='chatbot-regex'
            width='400'
          />
        )}
        {projectTitle === 'Catch Carrot' && (
          <Image
            className='rounded-t-xl'
            src={carrot}
            alt='catch-carrot-game'
            width='400'
          />
        )}
      </div>
      <div></div>
    </div>
  );
}
