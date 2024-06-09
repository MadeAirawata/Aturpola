import React from 'react';
import logo from '../assets/logooo.png';

function Header() {
  return (
    <header className="bg-yellow-100 text-green-700 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="AturPola Logo" className="h-16 mr-2 ml-16" />
          <span className="text-2xl font-bold text-green-700"></span>
        </div>
        <nav className="flex-grow flex justify-center space-x-8">
          <a href="#" className="hover:text-green-500">Makanan Sehat</a>
          <a href="#" className="hover:text-green-500">Latihan Fisik</a>
          <a href="#" className="hover:text-green-500">Komunitas</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
