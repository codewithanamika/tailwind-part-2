import React from 'react'; // Import React
import './index.css'; // Import Tailwind styles if not already imported

function App() {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500">
  <h1 className="text-5xl font-extrabold text-white tracking-wide shadow-md transform transition duration-300 hover:scale-110">
    Welcome to <span className="text-yellow-300">Tailwind</span> with <span className="text-green-300">Vite!</span>
  </h1>
    </div>
  );
}

export default App;
