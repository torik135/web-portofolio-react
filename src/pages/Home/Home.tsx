import React from 'react';
import { motion, useAnimation } from 'framer-motion';

import { Me, Nav, Side, Box } from '../../components';

const Home: React.FC = () => {
  const boxAnimation = useAnimation();

  const handleMouseMoveBox: React.MouseEventHandler<HTMLElement> | undefined = (
    e: any,
  ) => {
    const { clientX, clientY } = e;
    const moveX = clientX - window.innerWidth / 2;
    const moveY = clientY - window.innerHeight / 2;
    const offsetFactor = 15;
    boxAnimation.start({
      x: moveX / offsetFactor,
      y: moveY / offsetFactor,
    });
  };

  return (
    <>
      <header>
        <Nav />
      </header>
      <div className='flex desktop:flex-row laptop:flex-row tablet:flex-col sm:flex-col mt-[2rem]'>
        <section className='w-[8vw]'>
          <Side />
        </section>
        <section className='w-[20vw] desktop:translate-y-[6rem] laptop:translate-y-[6rem] tablet:translate-y-[1rem] tablet:mx-auto tablet:translate-x-[-8rem] sm:translate-x-[-3.5rem] sm:mx-auto'>
          <Me />
        </section>
        <motion.section
          className='desktop:w-[30vw] laptop:w-[30vw] tablet:w-[60vw] sm:w-[80vw] sm:mt-[1rem] mx-auto desktop:relative laptop:relative'
          animate={boxAnimation}
          onMouseMove={(e) => handleMouseMoveBox(e)}
        >
          <Box />
        </motion.section>
      </div>
    </>
  );
};

export { Home };
