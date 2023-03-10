import Header from '@/components/organisms/Header';
import React from 'react';
import Image from 'next/image';
import dream from '../../public/images/dream.svg';
import zero from '../../public/images/zero.png';

export default function AboutMe() {
  return (
    <>
      <Header />
      <div className='container mx-auto mt-8'>
        <h1 className='text-3xl font-bold text-gray-900'>About Me</h1>
        <p className='mt-2 p-4 text-lg border-2 border-black rounded-lg'>
          <span className='font-semibold'>
            새로운 것을 받아들이는데 거리낌이 없습니다.
          </span>
          <br />
          새로운 지식을 쌓는데 흥미를 갖고 있기 때문입니다
          <br />
          개발 영역을 확장하고자 합니다. <br />
          제가 생각하는 개발 영역은 유저가 필요로 되는 어느 곳이든 적용된다고
          생각합니다 <br />
          따라서, 웹을 넘어서 모바일, 키오스크, 가상현실 등의 영역을 확장하고자
          합니다
        </p>

        <h1 className='text-3xl font-bold mt-14 text-gray-900'>
          Experience of Works
        </h1>
        <div className='mt-2 p-4 text-lg border-2 border-black rounded-lg'>
          <p>
            <span className='font-semibold'>
              Version Control에 대한 이해도가 있습니다.
            </span>
            <br />
            팀 프로젝트를 진행하면서 깃을 전담 했습니다. 따라서 Git-flow,
            convention을 팀 프로젝트에 맞도록 정하고 깃 브렌치를 관리하며 <br />
            브렌치에 대해 문제가 생겼을 때, 해결하면서 작업을 완수했던 경험이
            있습니다.
          </p>
          <p className='mt-6 text-lg'>
            새로운 지식을 적용하는데 망설임이 없습니다 <br />
            팀 프로젝트를 진행하면서 기능 분배 시, 처음 해봤던 기능 개발을
            담당했던 경험이 있습니다. <br />
            또한 기존에 다뤘던 로직과 다르게 사용해본 적 없는 프로그래밍 언어와
            라이브러리로 작업을 성공적으로 끝 마친 경험이 있습니다
          </p>
          <a
            href='https://veil-shock-17c.notion.site/playbook-1aaffb0637aa45bb91b71a8d64c5cbfe'
            target='_blank'
          >
            <b>프로젝트 회고록 📝</b>
          </a>
        </div>
        <div className='mt-14'>
          <h1 className='text-3xl font-bold text-gray-900'>
            Learn Programming School
          </h1>
          <div className='mt-2 p-4 text-lg border-2 border-black rounded-lg'>
            <Image
              className='w-40 h-20'
              src={dream}
              alt='dreamcoding-icon'
              width='150'
            />
            <ul className='text-lg font-semibold list-disc ml-4'>
              <li>
                <p>Dream-Coding Academy</p>
              </li>
              <li>
                <p>2022. 07 ~</p>
              </li>
              <ol>
                <li>포트폴리오 웹사이트 클론</li>
                <li>Git 마스터 과정</li>
                <li>자바스크립트 마스터리</li>
                <li>브라우저 101</li>
                <li>타입스크립트-객체지향 프로그래밍</li>
                <li>리액트 개념 정리</li>
                <li>리팩토링의 모든 것</li>
                <li>...</li>
              </ol>
            </ul>
            <div className='mt-12'>
              <Image
                className='w-14 h-14'
                src={zero}
                alt='dreamcoding-icon'
                width='150'
              />
              <ul className='text-lg font-semibold list-disc mt-6 ml-4'>
                <li>
                  <p>ZeroBase 프론트앤드 양성과정 8기</p>
                </li>
                <li>
                  <p>2022. 09 ~ 2023. 01</p>
                </li>
                <ol>
                  <li>알고리즘</li>
                  <li>주간 스터디</li>
                  <li>자바스크립트 Misson</li>
                  <li>React Misson</li>
                  <li>...</li>
                </ol>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
