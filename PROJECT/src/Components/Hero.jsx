import React, { useState } from 'react';
import HeroImage from '../assets/O200599(1).png';
import ResumePDF from '../assets/resume.pdf'; // Your resume file

const Hero = () => {
  const [showResume, setShowResume] = useState(false);
  const [showEmail, setShowEmail] = useState(false); // State to toggle the email display

  const handleResumeClick = () => {
    setShowResume(true); // Show the resume modal
  };

  const closeResumeModal = () => {
    setShowResume(false); // Close the resume modal
  };

  const handleConnectClick = () => {
    setShowEmail(!showEmail); // Toggle visibility of the email
  };

  return (
    <div className='bg-black text-white text-center py-16 font-mono' id='home'>
      <img 
        src={HeroImage} 
        alt="image-here" 
        className='mx-auto mb-8 w-80 h-80 rounded-full object-cover transform transition-transform duration-300 hover:scale-110 cursor-pointer' 
      />
      <h1 className='text-4xl font-bold'>
        I'm {" "}
        <span className=' text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Mahider</span>
        , Front-end Developer
      </h1>
      <p className='mt-4 text-lg text-gray-300'>
        I specialize in building modern and responsive web applications.
      </p>
      <div className='mt-8 space-x-4'>
        <button 
          className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'
          onClick={handleConnectClick} // Toggle email on button click
        >
          Connect With Me
        </button>
            
        <button 
          className='bg-gradient-to-r from-pink-500 to-yellow-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'
          onClick={handleResumeClick}
        >
          Resume
        </button>
      </div>

      {/* Show email if showEmail state is true */}
      {showEmail && (
        <div className="mt-8 text-lg text-gray-300">
          <p>Mail to: <a href="mailto:mahiderrathod420@gmail.com" className="text-pink-500">mahiderrathod420@gmail.com</a></p>
        </div>
      )}

      {/* Modal to show resume */}
      {showResume && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
          onClick={closeResumeModal}
        >
          <div 
            className="relative bg-white p-8 w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking inside
          >
            <button 
              className="absolute top-4 right-4 text-white bg-red-500 p-2 rounded-full"
              onClick={closeResumeModal}
            >
              X
            </button>
            <iframe 
              src={ResumePDF} 
              width="100%" 
              height="600px" 
              title="Resume" 
              className="border-none"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
