import './App.css'
import work from '../data.json'
import NavBar from './NavBar';
import React, { useEffect, useState } from 'react';


export default function ViewBlog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const blogData = JSON.parse(localStorage.getItem('blogData')) || [];
    setBlogs(blogData);
  }, []);
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
            {blogs.length > 0 ? (
              blogs.map((blog, index) => (
                <div key={index} className='border border-gray-400 p-4 mb-4 rounded-lg'>
                  <div dangerouslySetInnerHTML={{ __html: blog.content }} />
                </div>
              ))
            ) : (
              <p>No blogs found.</p>
            )}

          </div>
        </div>
      </main>
    </>
  )
}


