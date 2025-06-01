// src/layouts/BasicLayouts.jsx
import { useState } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import backgroundImg from "../images/background.jpg"; // Ensure this path is correct

const BasicLayouts = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const user = localStorage.getItem("user");

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
<div
  className="min-h-screen flex flex-col bg-cover bg-center "
  style={{ backgroundImage: `url(${backgroundImg})` }}
>      <Navbar />

      {/* Mobile Sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40">
          <div
            className="absolute inset-0 bg-black opacity-50"
            onClick={toggleSidebar}
          ></div>
          <aside className="relative bg-[#211814] w-64 h-full p-6 shadow-lg z-50">
            <button
              onClick={toggleSidebar}
              className="absolute top-4 right-4 text-2xl font-bold"
              aria-label="Close Menu"
            >
              ×
            </button>
            <nav className="flex flex-col gap-4 mt-12">
              <Link to="/home" onClick={toggleSidebar}>
                Home
              </Link>
              <Link to="/aboutus" onClick={toggleSidebar}>
                About Us
              </Link>
              <Link to="/developers" onClick={toggleSidebar}>
                Developers
              </Link>
              <Link to="/upload" onClick={toggleSidebar}>
                Upload
              </Link>
              <Link to="/view" onClick={toggleSidebar}>
                My Papers
              </Link>
              <Link to="/dashboard" onClick={toggleSidebar}>
                Dashboard
              </Link>
              {user ? (
                <button
                  onClick={() => {
                    handleLogout();
                    toggleSidebar();
                  }}
                  className="mt-4 bg-[#030201] hover:bg-[#030202] text-white px-4 py-2 rounded-md"
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
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default BasicLayouts;
