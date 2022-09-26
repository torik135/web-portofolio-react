import React from 'react';

const devStyle: string = 'p-[.7rem] bg-cover color-gray-800 font-extrabold';
const pStyle: string =
  'hover:bg-gray-800 hover:bg-opacity-25 hover:text-xl px-[2px] transition-all';

const lang: string[] = ['HTML', 'CSS', 'JS', 'PHP', 'PYTHON'];
const frameworks: string[] = ['REACTJS', 'NEXTJS', 'LARAVEL', 'DJANGO'];

const Box: React.FC = () => {
  return (
    <div className='text-center rounded-md desktop:w-[40vw] p-[1rem]  laptop:w-[40vw] tablet:w-[60vw] backdrop-grayscale'>
      <div className='grid grid-cols-2 gap-[.5rem] p-[1rem]'>
        {/* NO MAP BC: tailwindcss did not iterate bg-image/bg-color/color etc. */}
        <div className={`${devStyle} bg-circle-scatter rounded-tl-md`}>
          <p className={`${pStyle} rounded-tl-md`}>Frontend</p>
        </div>

        <div className={`${devStyle} bg-stacked-steps rounded-tr-md`}>
          <p className={pStyle}>Backend</p>
        </div>

        <div className={`${devStyle} bg-low-poly-grid col-span-2`}>
          <p className={pStyle}>Fullstack</p>
        </div>
      </div>

      <div className='mx-[1rem] p-[1rem] bg-stacked-peaks bg-contain hover:bg-cover rounded-b-md h-[5rem] hover:h-[12rem] transition-all'>
        <div className='flex items-center justify-center gap-[1rem] rounded-md h-[3rem] hover:h-[10rem] p-[1rem] desktop:text-xl laptop:text-xl tablet:text-sm hover:bg-gray-500 hover:bg-opacity-25 hover:text-xl transition-all'>
          {lang?.map((i) => (
            <div key={Math.random()}>{i}</div>
          ))}
        </div>
      </div>
      <div className='mx-[1rem] mt-[1rem] p-[1rem] bg-stacked-waves bg-cover filter hover:hue-rotate-15 rounded-md h-[4rem] hover:font-extrabold transition-all'>
        <div className='flex desktop:text-xl laptop:text-lg tablet:text-xs items-center h-[2rem] justify-center gap-[1rem] '>
          {frameworks?.map((i) => (
            <div key={Math.random()}>{i}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { Box };
