## 프로젝트

Nextjs 기반으로 Notion API를 활용한 포트폴리오 PR 사이트입니다. Notion API는 제 노션 프로젝트 갤러리에 있는 태그들을 활용 했습니다.

## 주요 Stacks

- next.js
- react.js
- tailwindCSS
- postman(Notion-API)
- atomic design
- vercel(deploy)

## 레이아웃

레이아웃 구성의 정보는 HomeData인 라우터 정보와, 환경변수 설정, 노션 API에 대한 정보 등을 서술했습니다.

<br>
#### 1.Home Data
```js
export const INFO_LIST = [
  {
    id: 1,
    title: 'Home',
    link: '/',
  },
  {
    id: 2,
    title: 'About',
    link: '/AboutMe',
  },
  {
    id: 3,
    title: 'Stacks',
    link: '/Stacks',
  },
  {
    id: 4,
    title: 'Works',
    link: '/MyProjects',
  },
];
```
<br>

#### 2.dotenv

```js
yarn add dotenv
```

```js
NEXT_PUBLIC_NOTION_TOKEN = '';
NEXT_PUBLIC_NOTION_DATABASE_ID = '';
```

<br>

#### 3. Notin API

```js
// GetStaticProps

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
```

```js

## Notion API Datas

  // variables
  const projectIcon = datas.icon.emoji;
  const projectTitle = datas.properties.이름.title[0].plain_text;
  const projectGit = datas.properties.Github.url;
  const projectCreatedAt = datas.properties.생성일.created_time;
  const projectDescription = datas.properties.설명.rich_text;
  const projectTag = datas.properties.태그.multi_select;
```

<br>

## Deploy

- vercel
