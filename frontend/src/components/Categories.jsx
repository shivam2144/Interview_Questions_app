import React from 'react';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';

const categories = [
  { name: "Frontend", description: "React, Vue, Angular, HTML, CSS, JavaScript", icon: "🖥️" },
  { name: "Backend", description: "Node.js, Express, Databases, APIs", icon: "🗄️" },
  { name: "Data Scientist", description: "Machine Learning, Python, Data Analysis", icon: "📊" },
  { name: "DevOps", description: "CI/CD, Docker, Kubernetes, AWS", icon: "⚙️" },
  { name: "Machine Learning", description: "Algorithms, Deep Learning, NLP", icon: "🤖" },
  { name: "Mobile Development", description: "Flutter, React Native, Android, iOS", icon: "📱" },
  { name: "Cloud Computing", description: "AWS, Azure, Google Cloud Platform, Serverless", icon: "☁️" },
  { name: "Cybersecurity", description: "Network Security, Ethical Hacking, Cryptography", icon: "🔒" },
  { name: "Blockchain", description: "Smart Contracts, Ethereum, Cryptocurrencies", icon: "⛓️" },
  { name: "Game Development", description: "Unity, Unreal Engine, C#, 3D Modeling", icon: "🎮" },
  { name: "Artificial Intelligence", description: "Neural Networks, Computer Vision, Robotics", icon: "🤖" },
  { name: "Data Engineering", description: "ETL, Big Data, Apache Spark, Hadoop", icon: "🛠️" },
  { name: "UI/UX Design", description: "Wireframing, Prototyping, Figma, User Research", icon: "🎨" },
  { name: "Software Testing", description: "Selenium, Manual Testing, Test Automation", icon: "🧪" },
  { name: "Database Administration", description: "MySQL, PostgreSQL, Oracle, Performance Tuning", icon: "💾" },
];

const CategorySelect = () => {
  const navigate = useNavigate();

  const handleSelectCategory = (name) => {
    console.log('Selected Category:', name);
    navigate(`/generate/${name}`);
  };

  const handleKeyDown = (e, name) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleSelectCategory(name);
    }
  };

  return (
    <>
  <Navbar />
  <div className="bg-gray-50 min-h-screen pt-24 px-4">
    <h1 className="text-center text-3xl md:text-4xl font-extrabold text-gray-600 mb-6 drop-shadow-sm">
     Which Subject Do You Want to Tackle Today?
    </h1>

    <div className="flex flex-wrap gap-6 justify-center">
      {categories.map(({ name, description, icon }) => (
        <div
          key={name}
          tabIndex={0}
          role="button"
          onClick={() => handleSelectCategory(name)}
          onKeyDown={(e) => handleKeyDown(e, name)}
          className="max-w-xs cursor-pointer bg-white rounded-lg shadow-md p-5 flex flex-col gap-3
                     hover:shadow-xl focus:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500
                     transition-shadow duration-300"
          aria-label={`Select category ${name}`}
        >
          <div className="text-4xl">{icon}</div>
          <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      ))}
    </div>
  </div>
</>
  );
};

export default CategorySelect;
