import React from 'react';
import { Link } from 'react-router-dom';
import CategorySelect from './components/Categories';
import Testimonials from './components/useCards';
import Navbar from './components/Navbar';

function Homepage1() {
  return (
    <>
      <Navbar />
      <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white px-4 pt-20 overflow-hidden">
        {/* Hero Background Effects */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full blur-3xl opacity-30 animate-pulse"></div>

        {/* Hero Content */}
        <div className="relative text-center z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-xl animate-fade-in-up">
            Get Started with AI Q&A
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-xl mx-auto text-gray-200">
            Your personalized question generator for interviews, education, and more.
          </p>
          <Link
            to="/Categories"
            className="inline-block bg-white text-indigo-700 font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-gray-100 hover:scale-105 transition duration-300"
          >
            Generate Questions
          </Link>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-12 bg-white">
        <Testimonials />
      </div>
    </>
  );
}

export default Homepage1;
