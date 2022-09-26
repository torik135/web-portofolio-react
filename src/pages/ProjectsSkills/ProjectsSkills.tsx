import React from 'react';
import { Projects, IProjectList, Skills } from '../../components';

const ProjectLists: IProjectList[] = [
  {
    name: 'project1',
    code: 'github.com/torik135/project1',
    live: 'http:live.com/project1',
    desc: 'this is desc',
  },
  {
    name: 'project2',
    code: 'github.com/torik135/project2',
    live: 'http:live.com/project2',
    desc: 'this is desc',
  },
  {
    name: 'project3',
    code: 'github.com/torik135/project3',
    live: 'http:live.com/project3',
    desc: 'this is desc',
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
          <div className='grid grid-cols-3 gap-[1rem]'>
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
