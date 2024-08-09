import NavBar from './NavBar';
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function CreateBlog() {
    const [name, setName] = useState('');
    const [city, setCity] = useState('');
    const [email, setEmail] = useState('');
    const [descrip, setDescrip] = useState('');
    const [img, setImg] = useState(null);

    const handleFileChange = (event) => {
        setImg(event.target.files[0]);
    };

    const stripHtmlTags = (html) => {
        const doc = new DOMParser().parseFromString(html, 'text/html');
        return doc.body.textContent || "";
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!img) {
            console.error('Please select an image.');
            return;
        }

        const strippedName = stripHtmlTags(name);
        const strippedCity = stripHtmlTags(city);
        const strippedEmail = stripHtmlTags(email);
        const strippedDescrip = stripHtmlTags(descrip);

        const formData = new FormData();
        formData.append('name', strippedName);
        formData.append('city', strippedCity);
        formData.append('email', strippedEmail);
        formData.append('descrip', strippedDescrip);
        formData.append('img', img);

        fetch('http://localhost:4000/CreateBlog', {
            method: 'POST',
            body: formData
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
    };


    return (
        <>
            <div className='mx-52'>
                <NavBar />
                <form className='mx-24' onSubmit={handleSubmit} encType="multipart/form-data">
                    <div className='mb-4'>
                        <label htmlFor="name">Name:</label>
                        <ReactQuill
                            className='h-full'
                            value={name}
                            placeholder='Enter your Name'
                            onChange={setName}
                            modules={{ toolbar: false }}
                        />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor="email">Email:</label>
                        <ReactQuill
                            className='h-full'
                            value={email}
                            placeholder='Enter your Email'
                            onChange={setEmail}
                            modules={{ toolbar: false }}
                        />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor="city">City:</label>
                        <ReactQuill
                            className='h-full'
                            value={city}
                            placeholder='Enter your City'
                            onChange={setCity}
                            modules={{ toolbar: false }}
                        />
                    </div>
                    <div className='mb-4 space-x-3'>
                        <label htmlFor="image">Image:</label>
                        <input type="file" name="img" onChange={handleFileChange} />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor="info">Description:</label>
                        <ReactQuill
                            className='h-full'
                            value={descrip}
                            placeholder='Enter Description'
                            onChange={setDescrip}
                            modules={{ toolbar: false }}
                        />
                    </div>
                    <button
                        type="submit"
                        className='bg-green-400 font-medium mt-24 right-5 border border-black px-6 py-1 rounded-lg'
                    >
                        Submit
                    </button>
                </form>
            </div>
        </>
    );
}
