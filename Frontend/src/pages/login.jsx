import { useState } from 'react';
import { login } from '../services/authServices.jsx';
import { useNavigate } from 'react-router-dom';
import Header from '../components/header.jsx';
import Footer from '../components/footer.jsx';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(formData);
      alert('Login successful!');
      navigate('/profile');
    } catch (error) {
      alert(error.response?.data?.message || 'Login failed');
    }
  };

  return (
    <>
      <Header />
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <form className="bg-white p-8 rounded shadow-md w-96" onSubmit={handleSubmit}>
          <h2 className="text-2xl font-bold mb-6">Login</h2>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="mb-4 p-2 w-full border rounded"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="mb-6 p-2 w-full border rounded"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-700"
          >
            Login
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Login;
