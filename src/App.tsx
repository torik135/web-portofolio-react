import { Home, ProjectsSkills } from './pages';
import './assets/css/App.css';

function App() {
  const year = new Date().getFullYear();
  return (
    <>
      <div className='min-h-[120vh] bg-layered-waves bg-cover bg-no-repeat bg-clip-border'>
        <Home />
      </div>
      <div className='bg-gradient-to-b from-yellow-500 via-orange-500 to-black-400'>
        <div className='h-[5rem]'></div>
      </div>
      <div className='min-h-[100vh]'>
        <ProjectsSkills />
      </div>
      <div className='text-center'>
        <footer>&copy; {year} | torik135</footer>
      </div>
    </>
  );
}

export default App;
