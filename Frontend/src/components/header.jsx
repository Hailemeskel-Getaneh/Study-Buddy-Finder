// src/components/Header.jsx
import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo.png';


const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center sticky">
<h4 className="text-xl sm:text-2xl font-extrabold text-white">
  <Link to="/" className="hover:text-gray-300 transition-colors duration-200">HamarSBF</Link>
</h4>


      <nav>
      <Link className=" mr-4 sm:text-xl bold hover:underline" to="/">Home</Link>
        <Link className="mr-4 sm:text-xl hover:underline" to="/login">Login</Link>
        <Link className=" sm:text-xl hover:underline" to="/register">Register</Link>
      </nav>
    </header>
  );
};

export default Header;
