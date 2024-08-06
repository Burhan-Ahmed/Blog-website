import NavBar from './NavBar';
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function CreateBlog() {
    const [editorHtml, setEditorHtml] = useState('');

    const handleChange = (value) => {
        setEditorHtml(value);
    };

    const saveToLocalStorage = () => {
        const existingData = JSON.parse(localStorage.getItem('blogData')) || [];
        existingData.push({ content: editorHtml });
        localStorage.setItem('blogData', JSON.stringify(existingData));

    };

    return (
        <>
            <div className='mx-52'>
                <NavBar />
                <div className='mx-24 '>
                    <ReactQuill className='mt-10 h-full'
                        value={editorHtml}
                        onChange={handleChange}
                    />
                    <button onClick={saveToLocalStorage} className='bg-green-300  font-medium mt-24 right-5 border border-black px-6 py-1 rounded-lg'>
                        Submit
                    </button>
                </div>
            </div>
        </>
    );
}
