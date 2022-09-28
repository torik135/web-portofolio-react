import React from 'react';
import { Projects, IProjectList, Skills } from '../../components';

const ProjectLists: IProjectList[] = [
  {
    name: '2048 game',
    code: 'https://github.com/torik135/js-game',
    live: 'https://js-game-sooty.vercel.app',
    desc: 'Game made with HTML, CSS, and JS',
  },
  {
    name: 'Youtube Clone',
    code: 'https://github.com/torik135/react-youtube-rapidapi',
    live: 'https://react-youtube-rapidapi.vercel.app',
    desc: 'Youtube Clone with ReactJS and RapidAPI',
  },
  {
    name: 'Todo App',
    code: 'https://github.com/torik135/todoapp',
    live: 'https://todoapp-two-xi.vercel.app',
    desc: 'TodoApp using ReactJS',
  },
  {
    name: 'State CSV',
    code: 'https://github.com/torik135/nextjs-state-csv',
    live: 'https://nextjs-state-csv.vercel.app',
    desc: 'Save State into CSV File to Download using NextJS',
  },
  {
    name: 'Google Clone',
    code: 'https://github.com/torik135/googel-reactjs-tailwind',
    live: 'https://this-search.netlify.app/search',
    desc: 'Google Clone with ReactJS and Tailwindcss',
  },
  {
    name: 'HXH Blog',
    code: 'https://github.com/torik135/HXH-blog',
    live: 'https://this-hxh-blog.vercel.app',
    desc: 'Blog using NextJS',
  },
];

const ProjectsSkills: React.FC = () => {
  return (
    <>
      <div className='flex flex-col justify-center items-center gap-[2rem] mt-[2rem]'>
        <div>
          <Skills />
        </div>
        <div>
          <h2 className='mb-[2rem] text-center text-2xl font-bold'>Projects</h2>
          <div className='grid tablet:grid-cols-3 sm:grid-cols-1 gap-[1rem] h-[30rem] overflow-x-scroll p-[2rem]'>
            {ProjectLists.map((i) => (
              <Projects
                name={i.name}
                code={i.code}
                live={i.live}
                desc={i.desc}
                key={Math.random()}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export { ProjectsSkills };
