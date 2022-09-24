import { Home, ProjectsSkills } from './pages';
import './assets/css/App.css';

function App() {
  const year = new Date().getFullYear();
  return (
    <main className='w-[100vw]'>
      <section className='min-h-[120vh] bg-layered-waves bg-cover bg-no-repeat bg-clip-border'>
        <Home />
      </section>
      <section className='bg-gradient-to-b from-yellow-500 via-orange-500 to-black-400'>
        <div className='h-[5rem]'></div>
      </section>
      <section className='min-h-[100vh]'>
        <ProjectsSkills />
      </section>
      <section className='text-center'>
        <footer>&copy; {year} | torik135</footer>
      </section>
    </main>
  );
}

export default App;
