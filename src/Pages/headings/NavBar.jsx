
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <>
            <nav className="font-poppins py-5 text-white" style={{ background: '#343A40' }}>
                <ul className="flex justify-between text-lg mx-32">
                    <div className="px-4 py-2 text-2xl font-semibold">
                        <li>
                            <Link to="/">E-Commerce Store</Link>
                        </li>
                    </div>
                    <div className="flex space-x-4">
                        <li className="border px-4 py-2 rounded-xl">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="border px-4 py-2 rounded-xl">
                            <Link to="/ProductsPage">Products</Link>
                        </li>
                        <li className="border px-4 py-2 rounded-xl">
                            <Link to="/CartPage">Cart</Link>
                        </li>
                        <li className="border px-4 py-2 rounded-xl">
                            <Link to="/ContactPage">Contact Us</Link>
                        </li>
                    </div>
                    <div className="flex space-x-4">
                        <li className="border px-4 py-2 rounded-xl">
                            <Link to="/RegisterPage">Register</Link>
                        </li>
                        <li className="border px-4 py-2 rounded-xl">
                            <Link to="/LoginPage">Login</Link>
                        </li>
                    </div>
                </ul>
            </nav >
        </>
    )
}