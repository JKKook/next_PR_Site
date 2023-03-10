import Header from '@/components/organisms/Header';
import React from 'react';
import { DATABASEID, TOKEN } from '../../config/index';
import ProjectItem from '../components/molecules/ProjectItem';

export default function MyProjects({ projects }) {
  console.log(projects);
  return (
    <>
      <Header />
      <h1 className='text-3xl font-bold container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
        Project Gallerys : {projects.results.length}
      </h1>

      <div className='container mx-auto'>
        {projects.results.map((result) => (
          <ProjectItem key={result.id} datas={result} />
        ))}
      </div>
    </>
  );
}

// ** 함수를 내보내면 Next.js에서 반환된 프롭사용해서 빌드 시 페이지 미리 랜더링
// https://nextjs.org/docs/basic-features/data-fetching/get-static-props
export async function getStaticProps() {
  // Query a Database in Notion
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'Notion-Version': '2022-06-28',
      'content-type': 'application/json',
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({
      sorts: [
        {
          property: 'Github',
          direction: 'descending',
        },
      ],
      page_size: 100,
    }),
  };

  const res = await fetch(
    `https://api.notion.com/v1/databases/${DATABASEID}/query`,
    options,
  );

  const projects = await res.json();
  console.log('result', projects);

  return {
    props: { projects }, // will be passed to the page component as props
  };
}
