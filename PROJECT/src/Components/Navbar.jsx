import React, { useState } from 'react';

const Navbar = () => {
  const [showEmail, setShowEmail] = useState(false); // State to toggle email visibility

  const handleConnectClick = () => {
    setShowEmail(!showEmail); // Toggle email visibility on button click
  };

  return (
    <nav className='fixed z-10 top-0 left-0 w-full bg-black text-white px-8 md:px-16 lg:px-24'>
      <div className='container py-2 flex justify-center md:justify-between items-center'>
        <div className='text-2xl font-bold hidden md:inline'>
            Mahider
        </div>
        <div className='space-x-10 font-mono'>
            <a href="#home" className='hover:text-gray-400'>Home</a>
            <a href="#about" className='hover:text-gray-400'>About Me</a>
            <a href="#service" className='hover:text-gray-400'>Services</a>
            <a href="#home" className='hover:text-gray-400'>Projects</a>
            <a href="#contact" className='hover:text-gray-400'>Contact</a>
        </div>
        <button 
          className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'
          onClick={handleConnectClick} // Toggle email visibility on click
        >
          Connect
        </button>
      </div>

      {/* Show email if showEmail state is true */}
      {showEmail && (
        <div className="mt-4 text-lg text-gray-300 text-right w-100 h-50 bg-black px-6 pb-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105">
          <p>Mail to: <a href="mailto:mahiderrathod420@gmail.com" className="text-pink-500">mahiderrathod420@gmail.com</a></p>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
