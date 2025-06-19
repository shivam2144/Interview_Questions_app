import React from 'react';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';

const categories = [
  {
    name: 'Frontend',
    description: 'React, Vue, Angular, HTML, CSS, JavaScript',
    icon: '🖥️',
  },
  {
    name: 'Backend',
    description: 'Node.js, Express, Databases, APIs',
    icon: '🗄️',
  },
  {
    name: 'Data Scientist',
    description: 'Machine Learning, Python, Data Analysis',
    icon: '📊',
  },
  {
    name: 'DevOps',
    description: 'CI/CD, Docker, Kubernetes, AWS',
    icon: '⚙️',
  },
  {
    name: 'Machine Learning',
    description: 'Algorithms, Deep Learning, NLP',
    icon: '🤖',
  },
  {
    name: 'Mobile Development',
    description: 'Flutter, React Native, Android, iOS',
    icon: '📱',
  },
];

const CategorySelect = ({ onSelectCategory }) => {
  const navigate = useNavigate();

  const handleCategoryClick = (name) => {
    navigate(`/generate/${name}`);
  };

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-8 flex flex-col items-center">
        <h1 className="text-white text-4xl font-extrabold mb-10 drop-shadow-lg">
          Select a Category
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-5xl">
          {categories.map(({ name, description, icon }) => (
            <div
              key={name}
              onClick={() => handleCategoryClick(name)}
              className="cursor-pointer bg-white bg-opacity-20 backdrop-blur-md rounded-xl p-6 flex flex-col items-center shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <div className="text-6xl mb-4">{icon}</div>
              <h2 className="text-white text-2xl font-bold mb-2">{name}</h2>
              <p className="text-white text-center opacity-80">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CategorySelect;