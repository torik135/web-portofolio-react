import { motion, useAnimation } from 'framer-motion';

import { Me, Nav, Side, Box, Footer } from '../../components';

function Home() {
  const boxAnimation = useAnimation();

  const handleMouseMoveBox = (e) => {
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
      <div className='flex desktop:flex-row laptop:flex-row tablet:flex-col mt-[2rem]'>
        <section className='w-[8vw]'>
          <Side />
        </section>
        <section className='w-[20vw] desktop:translate-y-[6rem] laptop:translate-y-[6rem] tablet:translate-y-[1rem] tablet:mx-auto tablet:translate-x-[-8rem]'>
          <Me />
        </section>
        <motion.section
          className='desktop:w-[30vw] laptop:w-[30vw] tablet:w-[60vw] mx-auto desktop:relative laptop:relative'
          animate={boxAnimation}
          onMouseMove={(e) => handleMouseMoveBox(e)}
        >
          <Box />
        </motion.section>
      </div>
    </>
  );
}

export { Home };
