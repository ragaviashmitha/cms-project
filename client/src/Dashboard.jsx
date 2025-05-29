import { useState } from 'react';

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="min-h-screen bg-[#FDF8F5] text-[#2D2D2D]">
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full bg-[#F4E8E2] shadow z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
          <h1 className="text-xl font-bold">ResearchPaper.io</h1>
          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-6">
            <a href="#home" className="hover:text-[#D6B1A1]">Home</a>
            <a href="#about" className="hover:text-[#D6B1A1]">About Us</a>
            <a href="#team" className="hover:text-[#D6B1A1]">Team</a>
            <a href="#contact" className="hover:text-[#D6B1A1]">Contact</a>
          </nav>
          {/* Mobile Menu Button */}
          <button onClick={toggleSidebar} className="md:hidden text-2xl">
            ☰
          </button>
        </div>
      </header>

      {/* Sidebar - Mobile */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40">
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={toggleSidebar}
          ></div>
          <aside className="fixed top-0 left-0 w-64 h-full bg-[#F4E8E2] shadow-lg p-6 z-50">
            <button onClick={toggleSidebar} className="text-xl mb-6">✕</button>
            <nav className="flex flex-col gap-4">
              <a href="#home" onClick={toggleSidebar}>Home</a>
              <a href="#about" onClick={toggleSidebar}>About Us</a>
              <a href="#team" onClick={toggleSidebar}>Team</a>
              <a href="#contact" onClick={toggleSidebar}>Contact</a>
            </nav>
          </aside>
        </div>
      )}

      {/* Page Content */}
      <main className="pt-20 px-6 max-w-5xl mx-auto">
        {/* Home Section */}
        <section id="home" className="min-h-[80vh] flex flex-col justify-center items-center text-center py-16">
          <h2 className="text-4xl font-bold mb-4">Welcome to ResearchPaper.io</h2>
          <p className="text-[#7A6E68] max-w-xl">
            A platform to store, manage, and access all your research papers in one place. Easy upload, quick access, and team collaboration made simple.
          </p>
        </section>

        {/* About Section */}
        <section id="about" className="py-16">
          <h3 className="text-3xl font-semibold mb-4">About Us</h3>
          <p className="text-[#7A6E68] max-w-3xl">
            Our platform is designed to help students and researchers manage their research work. Upload papers, share with team members, and organize your academic contributions with ease.
          </p>
        </section>

        {/* Team Section */}
        <section id="team" className="py-16">
          <h3 className="text-3xl font-semibold mb-4">Our Team</h3>
          <ul className="list-disc ml-6 text-[#7A6E68]">
            <li>Sree Devi R M – Co-Creator & Frontend Developer</li>
            <li>Ashmitha Ragavi S – Co-Creator & Backend Developer</li>
          </ul>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16">
          <h3 className="text-3xl font-semibold mb-4">Contact Us</h3>
          <p className="text-[#7A6E68]">
            For queries, contact us at <a href="mailto:info@researchpaper.io" className="text-[#D6B1A1] underline">info@researchpaper.io</a>
          </p>
        </section>
      </main>
    </div>
  );
}
