import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CartPage from './Pages/CartPage';
import Home from './Pages/Home';
import ContactPage from './Pages/ContactPage';
import LoginPage from './Pages/Login';
import RegisterPage from './Pages/register';
import ProductsPage from './Pages/Products';

export default function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/CartPage" element={<CartPage />} />
          <Route path="/ContactPage" element={<ContactPage />} />
          <Route path="/LoginPage" element={<LoginPage />} />
          <Route path="/RegisterPage" element={<RegisterPage />} />
          <Route path="/ProductsPage" element={<ProductsPage />} />
        </Routes>
      </Router>
    </>
  )
}


