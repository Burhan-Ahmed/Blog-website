import './App.css';
import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <div className='border-b'>
            <nav className='flex justify-between mt-14'>
                <img src="Flat-logo-Blogger.png" alt="Blog Logo" width={150} />
                <ul className='flex justify-around w-1/4 text-xl my-auto'>
                    <Link to="/CreateBlog">
                        <li>Create Blogs</li>
                    </Link>
                    <Link to="/">
                        <li>View Blogs</li>
                    </Link>
                </ul>
            </nav>
        </div>

    );
}
