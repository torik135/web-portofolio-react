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
      <main className='flex mt-[2rem]'>
        <section className='w-[2vw]'>
          <Side />
        </section>
        <section className='w-[30vw] ml-[6rem] translate-y-[6rem] mr-[5rem]'>
          <Me />
        </section>
        <motion.section
          className='w-[50vw] mr-[1rem]'
          animate={boxAnimation}
          onMouseMove={(e) => handleMouseMoveBox(e)}
        >
          <Box />
        </motion.section>
      </main>
    </>
  );
}

export { Home };
