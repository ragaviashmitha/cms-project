
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const handleLogout = () => {
    
    console.log('User logged out');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-[#FDF8F5] text-[#2D2D2D]">
      {/* Fixed Navbar */}
      <header className="fixed top-0 left-0 w-full bg-[#F4E8E2] shadow z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
          <h1 className="text-xl font-bold">ResearchPaper.io</h1>

          {/* Desktop Nav */}
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
      <div className={`fixed inset-0 z-40 transition-transform duration-300 ease-in-out md:hidden ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="absolute inset-0 bg-black opacity-50" onClick={toggleSidebar}></div>

        <aside className="relative bg-[#F4E8E2] w-64 h-full p-6 shadow-lg z-50">
          <button 
            onClick={toggleSidebar} 
            className="absolute top-4 right-4 text-2xl font-bold"
            aria-label="Close Menu"
          >
            ×
          </button>

          <nav className="flex flex-col gap-4 mt-12">
            <Link to="/home" onClick={toggleSidebar} className="hover:text-[#D6B1A1] transition-colors py-2 px-3 rounded">Home</Link>
            <Link to="/aboutus" onClick={toggleSidebar} className="hover:text-[#D6B1A1] transition-colors py-2 px-3 rounded">About Us</Link>
            <Link to="/team" onClick={toggleSidebar} className="hover:text-[#D6B1A1] transition-colors py-2 px-3 rounded">Developers</Link>
            <Link to="/upload" onClick={toggleSidebar} className="hover:text-[#D6B1A1] transition-colors py-2 px-3 rounded">Upload</Link>
            <button 
              onClick={() => {
                handleLogout();
                toggleSidebar();
              }}
              className="mt-4 bg-[#D6B1A1] hover:bg-[#C49A8A] text-white px-4 py-2 rounded-md transition-colors duration-200"
            >
              <Link to={'/'}>
              Logout
              </Link>
            </button>
          </nav>
        </aside>
      </div>

      <main className="pt-24 px-6 max-w-6xl mx-auto">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
    <section id="home" className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-2">Home</h2>
      <ul className="list-disc list-inside space-y-1">
        <li>Dashboard overview with statistics</li>
        <li>Recent activity feed</li>
        <li>Quick access to frequent actions</li>
        <li>Notifications and alerts</li>
      </ul>
    </section>

    <section id="aboutus" className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-2">About Us</h2>
      <ul className="list-disc list-inside space-y-1">
        <li>Platform introduction and features</li>
        <li>Mission statement and values</li>
        <li>User testimonials</li>
        <li>Contact information</li>
      </ul>
    </section>

    <section id="team" className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-2">Developers</h2>
      <ul className="list-disc list-inside space-y-1">
        <li>Team member profiles</li>
        <li>Development timeline</li>
        <li>Technology stack information</li>
        <li>Contribution guidelines</li>
      </ul>
    </section>

    <section id="upload" className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-2">Upload</h2>
      <ul className="list-disc list-inside space-y-1">
        <li>File upload interface</li>
        <li>Metadata input (title, authors, etc.)</li>
        <li>PDF processing status</li>
        <li>Upload history</li>
      </ul>
    </section>
  </div>
</main>

    </div>
  );
}
