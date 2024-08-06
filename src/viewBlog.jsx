import './App.css'
import work from '../data.json'
import NavBar from './NavBar';

export default function ViewBlog() {

  return (
    <>
      <main className='mx-52'>
        <NavBar />
        <div className='flex pt-5'>
          <div>
            {work.map(log => (
              <div className=' px-10 w-fit'>
                <div key={log.id} className='space-y-2 py-4'>
                  <h1 className='text-5xl bottom-20 '>{log.Info}</h1>
                  <p>{log.City}</p>
                  <img src={log.Image} alt="Reporting Image" />
                </div>
              </div>
            ))}
          </div>
          <div className=' w-full mt-4'>
            {work.map(log => (
              <div key={log.id} className='space-y-4 px-10 py-4'>
                <div className='flex'>
                  <img src="news.png" alt="Image" width={100} />
                  <div>
                    <h1 className='font-bold text-lg p-5'>{log.City}</h1>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}


