import React from 'react';

function Header () {
  return (
    <header className="bg-black text-white p-4 flex justify-between items-center">
    <div className="md:mx-20 flex items-center space-x-2">
      <img src="/logo.png" className="w-8 h-8" alt="Logo" />
      <div className="text-lg font-bold">Abstract</div>
      <span>|</span>
      <span>Help Center</span>
    </div>
    <button className="bg-transparent border border-white hover:bg-gray-800  px-4 py-2 rounded-md text-white transition-colors">
      Submit a request
    </button>
  </header>
  );
};

export default Header;