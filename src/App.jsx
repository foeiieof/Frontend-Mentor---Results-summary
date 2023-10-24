import reaction from './assets/images/icon-reaction.svg'
import memory from './assets/images/icon-memory.svg'
import verbal from './assets/images/icon-verbal.svg'
import visual from './assets/images/icon-visual.svg'
function App() {
  return (
    <>
      <section className='flex justify-center items-center mt-20 bg-[var(--white)] '>
      <div className='flex flex-col md:flex-row items-center p-0  box-border rounded-2xl shadow-xl'>
        {/* page left */}
      <div className="bgGd w-[360px] bg-[var(--)] rounded-2xl">
        <div className='flex flex-col justify-center items-center'>
          <h2 className='mt-6 text-[--light-lavender]'>Your Result</h2>
          <div className='h-[220px] w-[220px] flex flex-col justify-center items-center box-border m-6 rounded-full circlebg'>
            <h1 className='text-[var(--white)] text-6xl font-extrabold'>76</h1>
            <p className='text-[--light-lavender]'>of 100</p>
          </div>
          <div className='m-6 p-6'>
          <article className='flex flex-col justify-center items-center box-border'>
            <h1 className='text-[var(--white)] font-bold text-3xl'>Great</h1>
            <p className='text-[--light-lavender] text-center'>You scored higher than 65% of the people who have taken these tests.</p>
          </article>
          </div>
        </div>
      </div>
        {/* page right */}
      <div className="right w-[360px]  !important m-6 flex flex-col">
      <h3 className='text-xl mb-6'>Summary</h3>
      <ul>
        <li className='grid grid-cols-8 items-center bg-[--light-redbg] mb-5 p-4 rounded-lg'><img src={reaction} alt="icon" /><p className='col-start-2 text-[--light-red] ml-3 mr-20'>Reaction</p><p className='ml-4 col-start-7'>80</p><p className='col-start-8 text-[--dark-text]'>/100</p></li>
        <li className='grid grid-cols-8 items-center bg-[--orange-yellowbg] mb-5 p-4 rounded-lg'><img src={memory} alt="icon" /><p className='col-start-2 text-[--orange-yellow] ml-3 mr-20'>Memory</p><p className='ml-4 col-start-7'>92</p><p className='col-start-8 text-[--dark-text] '>/100</p></li>
        <li className='grid grid-cols-8 items-center bg-[--green-tealbg] mb-5 p-4 rounded-lg'><img src={verbal} alt="icon" /><p className='col-start-2 text-[--green-teal] ml-3 mr-20'>Verbal</p><p className='ml-4 col-start-7'>61</p><p className='col-start-8 text-[--dark-text]'>/100</p></li>
        <li className='grid grid-cols-8 items-center bg-[--cobalt-bluebg] mb-5 p-4 rounded-lg'><img src={visual} alt="icon" /><p className='col-start-2 text-[--cobalt-blue] ml-3 mr-20'>Visual</p><p className='ml-4 col-start-7'>72</p><p className='col-start-8 text-[--dark-text]'>/100</p></li>
      </ul>
      <button className='bgGd p-4 rounded-[2rem] text-[--white] mt-5'>Continue</button>
      </div>
      </div>
      </section>
    </>
  )
}

export default App
