import { useState } from 'react';
import './index.css';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <section
      className="relative bg-black text-white min-h-screen overflow-hidden"
      onMouseMove={(e) => {
        // Show sidebar if pointer is near left edge
        if (e.clientX < 50) setSidebarOpen(true);
        else if (e.clientX > 250) setSidebarOpen(false);
      }}
    >
      <div className="flex h-screen">

        {/* Sidebar */}
        <div
          className={`
            fixed top-0 left-0 h-full z-20 bg-[#0d0d0d] border-r border-gray-900 shadow-2xl shadow-black/50 p-4
            transform transition-transform duration-300 ease-in-out
            ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
            w-1/6
          `}
        >
          {/* Logo + Title */}
          <div className="mb-6 -mx-4 px-4">
            <div className="flex items-center space-x-3">
              <img
                src="https://www.adobe.com/express/learn/blog/media_196e5176585a00903655922c802ee1e507bb0a6e8.png?width=750&format=png&optimize=medium"
                alt="Logo"
                className="w-8 h-8 rounded-xl"
              />
              <h1 className="text-sm text-gray-300 font-bold tracking-wide">CloudStand</h1>
            </div>
            <div className="mt-4 border-b border-gray-900 w-full" />
          </div>

          {/* Navigation */}
          <ul className="space-y-4 px-2 text-sm text-gray-300">
            <li className="hover:bg-blue-500 p-4 rounded-xl border-b border-gray-900">Home</li>
            <li className="hover:bg-blue-500 p-4 rounded-xl border-b border-gray-900">Profile</li>
            <li className="hover:bg-blue-500 p-4 rounded-xl border-b border-gray-900">Products</li>
            <li className="hover:bg-blue-500 p-4 rounded-xl border-b border-gray-900">Manage</li>
          </ul>

          {/* Bottom Links */}
          <ul className="absolute bottom-8 left-4 w-[85%] border-t border-gray-900 pt-4 space-y-2 text-gray-300 text-sm font-normal">
            <li className="hover:bg-blue-500 p-4 rounded-xl">Settings</li>
            <li className="hover:bg-blue-500 p-4 rounded-xl">Logout</li>
          </ul>
        </div>

        {/* Main Content */}
        <div
          className={`flex-1 transition-all duration-300 ease-in-out ${
            sidebarOpen ? 'ml-[16.6667%]' : 'ml-0'
          } bg-[#121212] p-6`}
        >
          {/* Main Section */}
          <h2 className="text-2xl font-bold mb-4">Main Dashboard </h2>
          <div className=" p-6 rounded-xl shadow-md">
            <p className="text-gray-300">
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
