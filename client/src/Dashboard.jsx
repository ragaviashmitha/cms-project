
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const handleLogout = () => {
    // Add your logout logic here
    console.log('User logged out');
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-[#FDF8F5] text-[#2D2D2D]">
      {/* Fixed Navbar - same for both mobile and desktop */}
      <header className="fixed top-0 left-0 w-full bg-[#F4E8E2] shadow z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
          <h1 className="text-xl font-bold">ResearchPaper.io</h1>
          
          {/* Always visible navigation - hidden on mobile, shown on desktop */}
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/home" className="hover:text-[#D6B1A1] transition-colors px-3 py-1">Home</Link>
            <Link to="/aboutus" className="hover:text-[#D6B1A1] transition-colors px-3 py-1">About Us</Link>
            <Link to="/team" className="hover:text-[#D6B1A1] transition-colors px-3 py-1">Developers</Link>
            <Link to="/upload" className="hover:text-[#D6B1A1] transition-colors px-3 py-1">Upload</Link>
            <button 
              onClick={handleLogout}
              className="bg-[#D6B1A1] hover:bg-[#C49A8A] text-white px-4 py-2 rounded-md transition-colors duration-200 ml-4"
            >
              Logout
            </button>
          </nav>

          {/* Mobile menu button - shows sidebar with same options */}
          <button 
            onClick={toggleSidebar} 
            className="md:hidden text-2xl focus:outline-none"
            aria-label="Toggle Menu"
          >
            ☰
          </button>
        </div>
      </header>

      {/* Mobile Sidebar - shows same options as desktop nav */}
      <div className={`fixed inset-0 z-40 transition-transform duration-300 ease-in-out md:hidden ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        {/* Overlay */}
        <div 
          className="absolute inset-0 bg-black opacity-50" 
          onClick={toggleSidebar}
        ></div>

        {/* Sidebar Content */}
        <aside className="relative bg-[#F4E8E2] w-64 h-full p-6 shadow-lg z-50">
          <button 
            onClick={toggleSidebar} 
            className="absolute top-4 right-4 text-2xl font-bold"
            aria-label="Close Menu"
          >
            ×
          </button>
          
          <nav className="flex flex-col gap-4 mt-12">
            <Link 
              to="/dashboard" 
              onClick={toggleSidebar}
              className="hover:text-[#D6B1A1] transition-colors py-2 px-3 rounded"
            >
              Dashboard
            </Link>
            <Link 
              to="/papers" 
              onClick={toggleSidebar}
              className="hover:text-[#D6B1A1] transition-colors py-2 px-3 rounded"
            >
              My Papers
            </Link>
            <Link 
              to="/profile" 
              onClick={toggleSidebar}
              className="hover:text-[#D6B1A1] transition-colors py-2 px-3 rounded"
            >
              Profile
            </Link>
            <Link 
              to="/settings" 
              onClick={toggleSidebar}
              className="hover:text-[#D6B1A1] transition-colors py-2 px-3 rounded"
            >
              Settings
            </Link>
            <button 
              onClick={() => {
                handleLogout();
                toggleSidebar();
              }}
              className="mt-4 bg-[#D6B1A1] hover:bg-[#C49A8A] text-white px-4 py-2 rounded-md transition-colors duration-200"
            >
              Logout
            </button>
          </nav>
        </aside>
      </div>

      {/* Main content area - padding to account for fixed navbar */}
      <main className="pt-16 px-4">
        {/* Your dashboard content goes here */}
      </main>
    </div>
  );
}