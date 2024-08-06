import NavBar from './NavBar';
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function CreateBlog() {
    const [editorHtml, setEditorHtml] = useState('');

    // Removed the incorrect setJsonData function
    const handleChange = (value) => {
        setEditorHtml(value);
    };

    const saveToLocalStorage = () => {
        const existingData = JSON.parse(localStorage.getItem('blogData')) || [];
        existingData.push({ content: editorHtml });
        localStorage.setItem('blogData', JSON.stringify(existingData));
    };

    // Moved return statement inside the component function
    return (
        <>
            <div className='mx-52'>
                <NavBar />
                <div className='mx-24 '>
                    <ReactQuill className='mt-10 h-24'
                        value={editorHtml}
                        onChange={handleChange}
                    />
                    <button onClick={saveToLocalStorage} className='bg-blue-400 text-white font-medium mt-24 right-5 border border-black px-4 py-1 rounded-lg'>
                        Submit
                    </button>
                </div>
            </div>
        </>
    );
}
