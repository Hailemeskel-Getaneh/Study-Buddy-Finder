import React from 'react';
import Header from '../components/header.jsx';
import { Link } from 'react-router-dom';
import Footer from '../components/footer.jsx';
import '../../src/index.css';

const Home = () => {
  return (
    <>
      <Header />
      {/* Flex container with full height to push footer to the bottom */}
      <div className="flex flex-col min-h-screen">
        {/* Main content */}
        <main className="flex-grow p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Welcome to Study Buddy Finder</h2>
          <p className="mb-8">
            Find study partners based on your interests, courses, and topics. Join now and start collaborating!
          </p>
          <div>
            <Link
              to="/register"
              className="bg-blue-600 text-white px-6 py-2 rounded mr-4 hover:bg-blue-700"
            >
              Get Started
            </Link>
            <Link
              to="/login"
              className="bg-gray-600 text-white px-6 py-2 rounded hover:bg-gray-700"
            >
              Login
            </Link>
          </div>
        </main>

        {/* Footer stays at the bottom */}
        <Footer />
      </div>
    </>
  );
};

export default Home;
