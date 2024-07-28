import './App.css'
import React from 'react';


export default function App() {

  return (
    <>
      <div className='text-center m-12 text-4xl font-semibold'>
        <h1>  Color Picker </h1>
      </div>
      <form className='my-24 mx-96 flex justify-center'>
        <div className='space-y-10 border rounded-lg border-black py-14 px-20 shadow-lg'>
          <div className='text-center border-b'>
            <h1>Billing details</h1>
          </div>
          <div className='border border-black w-fit flex space-x-2'>
            <input className='border border-black ps-5 py-0.5 rounded-md' type="text" placeholder='First Name' />
            <input className='border border-black ps-5 py-0.5 rounded-md' type="text" placeholder='Last Name' />
          </div>
          <div className='flex flex-col border border-black space-y-2'>
            <input className='border border-black ps-5 py-0.5 rounded-md' type='address' placeholder='Address' />
            <input className='border border-black ps-5 py-0.5 rounded-md' type='email' placeholder='Email' />
            <input className='border border-black ps-5 py-0.5 rounded-md' type='number' placeholder='Phone Number' />
            <label htmlFor="colour">Color</label>
            <input className='border w-full border-black ps-5 py-0.5 rounded-md' name='colour' type='color' placeholder='red' />
          </div>
          <div className='flex justify-center'>
            <button className=' border border-black px-6 py-1 rounded-lg font-semibold'>
              CHANGE COLOR
            </button>
          </div>
        </div>
      </form>
    </>
  )
}


