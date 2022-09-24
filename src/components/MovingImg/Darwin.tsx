import { motion } from 'framer-motion';
import darwin from '../../assets/img/darwin.jpg';
import eye from '../../assets/img/eye.jpg';

const eyeStyle: string = 'absolute w-[.5rem]';

function Darwin() {
  return (
    <div>
      <img
        src={darwin}
        alt='darwin'
        className='w-[12rem] p-[.5rem] border-2 rounded-t-md'
      />
      <div className={eyeStyle}>
        <img
          src={eye}
          alt='darwin-eye'
          className={`${eyeStyle}`}
          style={{ top: '-79px', left: '67px' }}
        />
        <img
          src={eye}
          alt='darwin-eye'
          className={`${eyeStyle}`}
          style={{ top: '-79px', left: '110px' }}
        />
      </div>
    </div>
  );
}

export { Darwin };
