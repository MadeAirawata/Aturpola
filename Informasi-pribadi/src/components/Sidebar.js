import React, { useState } from 'react';
import profileImage from '../assets/profile-image.png'; // Ensure this is the correct path to your image

function Sidebar() {
  const [active, setActive] = useState('Informasi Pribadi');

  return (
    <div className="w-64 bg-orange-100 p-4">
      <div className="flex flex-col items-center mb-6">
        <div className="w-20 h-20 bg-yellow-300 rounded-full flex items-center justify-center mb-4">
          <img src={profileImage} alt="Profile" className="w-16 h-16 rounded-full" />
        </div>
        <div className="text-center">
          <div className="font-bold text-black">username</div>
          <div className="text-gray-600">namalengkap@gmail.com</div>
        </div>
      </div>
      <div className="flex justify-center space-x-2 mb-6">
        <button className="bg-green-600 text-white py-1 px-3 rounded">Ubah Password</button>
        <button className="bg-transparent border border-gray-800 text-gray-800 py-1 px-3 rounded">Sign Out</button>
      </div>
      <nav>
        <ul className="space-y-2">
          <li 
            className={`cursor-pointer ${active === 'Favorites' ? 'text-green-900' : 'text-green-700'} font-bold hover:text-green-500 transition-colors duration-300`} 
            onClick={() => setActive('Favorites')}
          >
            Favorites
          </li>
          <li 
            className={`cursor-pointer ${active === 'Informasi Pribadi' ? 'text-green-900' : 'text-green-700'} font-bold hover:text-green-500 transition-colors duration-300`} 
            onClick={() => setActive('Informasi Pribadi')}
          >
            Informasi Pribadi
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
