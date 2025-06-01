import React from 'react';
import Navbar from '../components/Navbar';
import bgabImg from '../images/bgab.jpg'; // Ensure this path is correct

export default function Developer() {
  return (
    // <Navbar>
      <div className="max-h-screen  bg-center bg-cover py-20 px-7 bg-no-repeat"
      style={{backgroundImage: `url(${bgabImg})` 
        }}>
          <h1 className="text-3xl font-bold text-center text-[#0c0b0b] mb-10">Meet the Developers</h1>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Sree Devi */}
            <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow border border-[#ed0bb8] group relative">
              <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-[#ef0ac9]">
                <img
                  src="/src/images/sree.jpg"
                  alt="Sree Devi"
                  className="w-full h-full object-cover group-hover:opacity-20 transition duration-300"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                  <p className="text-sm text-[#2D2D2D] font-bold">Frontend Developer</p>
                  <p className="text-xs text-[#7A6E68] mt-3 font-semibold">React.js | HTML | Tailwind CSS | JavaScript</p>
                </div>
              </div>
              <h2 className="text-xl font-semibold text-[#2D2D2D]">Sree Devi R M</h2>
              <p className="text-[#7A6E68] mt-2">Creator & Developer</p>
            </div>

            {/* Ashmitha Ragavi */}
            <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow border border-[#59f715] group relative">
              <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-[#e9f509]">
                <img
                  src="/src/images/Ash.jpg"
                  alt="Ashmitha Ragavi"
                  className="w-full h-full object-cover group-hover:opacity-20 transition duration-300"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                  <p className="text-sm text-[#2D2D2D] font-bold">Frontend Developer</p>
                  <p className="text-xs text-[#7A6E68] mt-3 font-semibold">React.js | HTML | Tailwind CSS | JavaScript</p>
                </div>
              </div>
              <h2 className="text-xl font-semibold text-[#2D2D2D]">Ashmitha Ragavi S</h2>
              <p className="text-[#7A6E68] mt-2">Creator & Developer</p>
            </div>
          </div>
        </div>

    // </Navbar>
  );
}
