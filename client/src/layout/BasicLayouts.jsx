
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Layout = ({ children }) => {
  const navigate = useNavigate();
  const user = localStorage.getItem("user");

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-blue-800 text-white px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-semibold">ResearchHub</h1>
          <div className="space-x-4 flex items-center">
            <a href="/" className="hover:underline">Home</a>
            <a href="/upload" className="hover:underline">Upload</a>
            <a href="/dashboard" className="hover:underline">Dashboard</a>

            {user ? (
              <button
                onClick={handleLogout}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-1 rounded"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={() => navigate("/signin")}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-1 rounded"
              >
                Login
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow bg-[#F4E8E2] p-6">
        <div className="max-w-4xl mx-auto">
          {children}
        </div>
      </main>

      
    </div>
  );
};

export default Layout;

