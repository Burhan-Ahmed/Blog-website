import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import CreateBlog from './CreateBlog';
import ViewBlog from './viewBlog';

export default function App() {
  return (
    <div >
      <Routes>
        <Route path="/CreateBlog" element={<CreateBlog />} />
        <Route path="/" element={< ViewBlog/>} />
      </Routes>
    </div>
  );
}
