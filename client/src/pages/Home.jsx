import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F4E8E2] flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-[#2D2D2D] mb-4">
        Welcome to Research Paper Management CMS
      </h1>
      <p className="text-[#5A504A] text-lg md:text-xl max-w-2xl mb-8">
        A simple platform to upload, manage, and track your academic research papers. Built with React and TailwindCSS for a smooth and responsive experience.
      </p>

      <div className="flex gap-4 flex-wrap justify-center">
        <Link
          to="/aboutus"
          className="px-6 py-2 bg-[#D6B1A1] text-white rounded shadow hover:bg-[#B98F7F] transition"
        >
          Get Started
        </Link>
        
      </div>
    </div>
  );
}
