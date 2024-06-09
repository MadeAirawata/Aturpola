import React from 'react';
import Sidebar from './components/Sidebar';
import UserInfo from './components/UserInfo';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 bg-gray-100 p-6">
          <UserInfo />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
