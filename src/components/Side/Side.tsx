import {
  BsGithub as GithubIcon,
  BsLinkedin as LinkedinIcon,
} from 'react-icons/bs';

const iconStyle: string =
  'border-2 w-[2rem] h-[2rem] text-center flex justify-center items-center transition-all hover:rounded-md hover:border-none hover:text-black hover:scale-110 cursor-pointer';

function Side() {
  return (
    <div className='flex flex-col gap-[1rem] p-[.5rem] translate-y-[15rem]'>
      <div className={`${iconStyle} hover:bg-gray-300`}>
        <a href='https://github.com/torik135' target='_blank'>
          <GithubIcon />
        </a>
      </div>
      <div className={`${iconStyle} hover:bg-blue-300`}>
        <a
          href='https://www.linkedin.com/in/thoriq-aziz-073425106/'
          target='_blank'
        >
          <LinkedinIcon />
        </a>
      </div>
    </div>
  );
}

export { Side };
