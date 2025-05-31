


import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const BasicLayouts = ({ children }) => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const user = localStorage.getItem("user");

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="min-h-screen flex flex-col bg-[#FDF8F5] text-[#2D2D2D]">
      {/* Navbar */}
      <header className="bg-[#F4E8E2] text-[#2D2D2D] shadow-md px-6 py-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">ResearchPaper.io</h1>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/home" className="hover:text-[#D6B1A1] transition-colors px-3 py-1">Home</Link>
            <Link to="/upload" className="hover:text-[#D6B1A1] transition-colors px-3 py-1">Upload</Link>
            <Link to="/view" className="hover:text-[#D6B1A1] transition-colors px-3 py-1">My Papers</Link>
            <Link to="/dashboard" className="hover:text-[#D6B1A1] transition-colors px-3 py-1">Dashboard</Link>
            {user ? (
              <button 
                onClick={handleLogout}
                className="bg-[#D6B1A1] hover:bg-[#C49A8A] text-white px-4 py-2 rounded-md transition-colors duration-200 ml-4"
              >
                Logout
              </button>
            ) : (
              <button 
                onClick={() => navigate("/signin")}
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition-colors duration-200 ml-4"
              >
                Login
              </button>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleSidebar} 
            className="md:hidden text-2xl focus:outline-none"
            aria-label="Toggle Menu"
          >
            ☰
          </button>
        </div>
      </header>

      {/* Mobile Sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40">
          <div 
            className="absolute inset-0 bg-black opacity-50"
            onClick={toggleSidebar}
          ></div>
          <aside className="relative bg-[#F4E8E2] w-64 h-full p-6 shadow-lg z-50">
            <button 
              onClick={toggleSidebar} 
              className="absolute top-4 right-4 text-2xl font-bold"
              aria-label="Close Menu"
            >
              ×
            </button>
            <nav className="flex flex-col gap-4 mt-12">
              <Link to="/home" onClick={toggleSidebar}>Home</Link>
              <Link to="/aboutus" onClick={toggleSidebar}>About Us</Link>
              <Link to="/team" onClick={toggleSidebar}>Developers</Link>
              <Link to="/upload" onClick={toggleSidebar}>Upload</Link>
              <Link to="/view" onClick={toggleSidebar}>My Papers</Link>
              <Link to="/dashboard" onClick={toggleSidebar}>Dashboard</Link>
              {user ? (
                <button 
                  onClick={() => {
                    handleLogout();
                    toggleSidebar();
                  }}
                  className="mt-4 bg-[#D6B1A1] hover:bg-[#C49A8A] text-white px-4 py-2 rounded-md"
                >
                  Logout
                </button>
              ) : (
                <button 
                  onClick={() => {
                    toggleSidebar();
                    navigate("/signin");
                  }}
                  className="mt-4 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
                >
                  Login
                </button>
              )}
            </nav>
          </aside>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-grow px-4 py-6">
        <div className="max-w-5xl mx-auto bg-white shadow rounded-xl p-6">
          {children}
        </div>
      </main>
    </div>
  );
};

export default BasicLayouts;
