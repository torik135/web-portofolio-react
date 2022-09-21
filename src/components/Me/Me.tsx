import './Me.css';

function Me() {
  return (
    <>
      <div className='flex place-items-center'>
        <div>
          <h2 className='font-bold'>Hi, My name is</h2>
          <br />
          <h1 className='text-8xl font-extrabold hover:text-transparent bg-stacked-steps transition bg-clip-text bg-contain bg-left myname'>
            THORIQ
          </h1>
          <br />
          <p className='mt-[4rem]'>
            And i'am a{' '}
            <span className='font-bold webdev after:bg-gradient-to-r after:from-purple-700 after:via-orange-500 after:to-green-300'>
              Web developer
            </span>
          </p>
        </div>
      </div>
    </>
  );
}

export { Me };
