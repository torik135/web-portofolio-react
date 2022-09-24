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
      <div className='flex mt-[2rem]'>
        <section className='w-[8vw]'>
          <Side />
        </section>
        <section className='w-[20vw] translate-y-[6rem]'>
          <Me />
        </section>
        <motion.section
          className='w-[30vw] mx-auto'
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
