// src/components/Header.jsx
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">
        <Link to="/">Study Buddy Finder</Link>
      </h1>
      <nav>
      <Link className=" mr-4 hover:underline" to="/">Home</Link>
        <Link className="mr-4 hover:underline" to="/login">Login</Link>
        <Link className="hover:underline" to="/register">Register</Link>
      </nav>
    </header>
  );
};

export default Header;
