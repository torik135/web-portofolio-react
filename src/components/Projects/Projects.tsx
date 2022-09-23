type projectListProps = {
  name: string;
  code: string;
  live: string;
  desc: string;
};

const aStyle: string =
  'flex p-[.2rem] bg-yellow-500 text-black font-extrabold rounded-md';

function Projects(props: projectListProps) {
  const { name, code, live, desc } = props;
  return (
    <div className='flex flex-col rounded-md p-[1rem] h-[22rem] w-[12rem] bg-blob-scene bg-cover bg-no-repeat hover:scale-110 hover:shadow-xl gap-[1rem] transition-all'>
      <div>
        <h3 className='mb-[2rem] font-bold capitalize'>{name}</h3>
        <div className='flex gap-[.5rem]'>
          <a className={aStyle} href={code}>
            code
          </a>
          <a className={aStyle} href={live}>
            live
          </a>
        </div>
      </div>
      <div className='bg-black p-[.5rem] bg-opacity-10 rounded-md'>{desc}</div>
    </div>
  );
}

export { Projects };
