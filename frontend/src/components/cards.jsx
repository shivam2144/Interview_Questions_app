import React from 'react';

 function Card({ children, className = "" }) {
  return (
    <div className={`bg-white p-4 rounded-lg shadow hover:shadow-lg transition duration-300 ${className}`}>
      {children}
    </div>
  );
}
export default Card;
