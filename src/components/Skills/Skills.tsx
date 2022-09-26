import React from 'react';

const otherSkillList: string[] = [
  'GIT',
  'MySQL',
  'SQLite',
  'TailwindCSS',
  'ChakraUI',
  'Styled Components',
];
const appSkillList: string[] = ['Photoshop', 'Inkscape', 'VSCode', 'Final Cut'];
const hobbyList: string[] = ['Drawing', 'Video Editing', 'Writing'];

const divStyle: string =
  'flex desktop:flex-row laptop:flex-row tablet:flex-col justify-between gap-[.5rem] p-[.5rem] px-[2rem] border-l-2 desktop:border-l-2 laptop:border-l-2 tablet:border-none place-items-center text-xl desktop:text-xl laptop:text-xl tablet:text-sm';

const h3Style: string = 'flex-1 font-bold';

const skillsList: string = 'after:content-["-"]';

const Skills: React.FC = () => {
  return (
    <div className='w-[70vw]'>
      <h2 className='font-bold text-2xl text-center'>Other Skills</h2>
      <div className={divStyle}>
        <h3 className={h3Style}>Programming</h3>
        {otherSkillList.map((i) => (
          <div className={skillsList} key={Math.random()}>
            {i}
          </div>
        ))}
      </div>
      <div className={divStyle}>
        <h3 className={h3Style}>App</h3>
        {appSkillList.map((i) => (
          <div className={skillsList} key={Math.random()}>
            {i}
          </div>
        ))}
      </div>
      <div className={divStyle}>
        <h3 className={h3Style}>Hobby</h3>
        {hobbyList.map((i) => (
          <div className={skillsList} key={Math.random()}>
            {i}
          </div>
        ))}
      </div>
    </div>
  );
};

export { Skills };
