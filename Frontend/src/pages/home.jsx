import React from 'react';
import Header from '../components/header.jsx';
import { Link } from 'react-router-dom';
import Footer from '../components/footer.jsx';
import MatchIcon from '../assets/images/match-icon.png';
import ChatIcon from '../assets/images/chat-icon.png';
import Scheduleicon from '../assets/images/schedule-Icon.png';
import Collaboration from '../assets/images/collaboration.png';
import GlobalCommunity from '../assets/images/global-community.png';
import Support from '../assets/images/support.png';

import '../../src/index.css';

const Home = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-blue-500 to-purple-600 text-white">
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <div className="relative z-10 flex flex-col justify-center items-center h-[70vh] text-center px-4">
            <h1 className="text-4xl sm:text-6xl font-extrabold mb-4">
              Study Buddy Finder
            </h1>
            <p className="text-lg sm:text-xl max-w-2xl mb-8">
              Discover study partners who match your interests and courses.
              Collaborate, learn, and grow together!
            </p>
            <div>
              <Link
                to="/register"
                className="bg-yellow-400 text-black font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-yellow-500 mr-4"
              >
                Get Started
              </Link>
              <Link
                to="/login"
                className="bg-white text-gray-800 font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-gray-200"
              >
                Login
              </Link>
            </div>
          </div>
        </div>

        <main className="flex-grow p-8 bg-gray-50">
  <h2 className="text-3xl font-bold text-center mb-12">
    Why Choose Study Buddy Finder?
  </h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-8 justify-center">
    {/* Feature Cards */}
    {[
      {
        icon: MatchIcon,
        title: 'Personalized Matches',
        description: 'Connect with students who share your interests and courses.',
      },
      {
        icon: ChatIcon,
        title: 'Real-Time Chat',
        description: 'Coordinate and collaborate through our seamless chat feature.',
      },
      {
        icon: Scheduleicon,
        title: 'Session Scheduling',
        description: 'Plan study sessions with ease and set reminders to stay on track.',
      },
      {
        icon: Collaboration,
        title: 'Collaboration Tools',
        description: 'Utilize virtual whiteboards and more for enhanced learning.',
      },
      {
        icon: GlobalCommunity,
        title: 'Global Community',
        description: 'Network with students from all over the world.',
      },
      {
        icon: Support,
        title: '24/7 Support',
        description: "We're here to help anytime you need assistance.",
      },
    ].map((feature, index) => (
      <div
        key={index}
        className="bg-white p-6 rounded-lg shadow-md text-center transition-transform transform hover:scale-105 hover:shadow-lg max-w-sm mx-auto"
      >
        <img
          src={feature.icon}
          alt={`${feature.title} Icon`}
          className="w-16 h-16 mx-auto mb-4"
        />
        <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
        <p>{feature.description}</p>
      </div>
    ))}
  </div>
</main>

        <Footer />
      </div>
    </>
  );
};

export default Home;
