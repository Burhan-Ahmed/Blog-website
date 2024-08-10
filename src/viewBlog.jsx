import './App.css'
import work from '../data.json'
import NavBar from './NavBar';
import React, { useEffect, useState } from 'react';


export default function ViewBlog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    async function getdata() {
      try {
        const response = await fetch('http://localhost:4000/getuser');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setBlogs(data); // Set the blogs state with the fetched data
        console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    getdata(); // Call the function to fetch data
  }, []);


  return (
    <>
      <main className='mx-52'>
        <NavBar />

        <div className='flex pt-5'>
          <div>
            {work.map((log, index) => (
              <div className=' px-10 w-fit'>
                <div key={index} className='space-y-2 py-4'>
                  <h1 className='text-5xl bottom-20 '>{log.Info}</h1>
                  <p>{log.City}</p>
                  <img src={log.Image} alt="Reporting Image" />
                </div>
              </div>
            ))}
          </div>
          <div className=' w-full mt-4'>
            {blogs && blogs.length > 0 ? (
              blogs.map((blog, index) => (
                <div key={index} className='border border-gray-400 p-4 mb-4 rounded-lg'>
                  <p>Name: {blog.Name}</p>
                  <p>Email: {blog.Email}</p>
                  <p>City: {blog.City}</p>
                  <div>
                    <p>Image:</p>
                    {blog.Image ? (
                      <img
                        src={`http://localhost:3000/image/${blog.id}`} // Fetch image from the server endpoint
                        alt={`${blog.Name}'s Blog`}
                        className='w-full h-auto mt-2'
                      />
                    ) : (
                      <p>No image available</p>
                    )}
                  </div>
                  <p>Description: {blog.Description}</p>
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


