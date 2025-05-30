import React from 'react';

export default function Team() {
  return (
    <div className="min-h-screen bg-[#F4E8E2] py-12 px-6">
      <div className="max-w-4xl mx-auto bg-[#FDF8F5] border border-[#EAD6CC] p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-center text-[#2D2D2D] mb-10">Meet Our Team</h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Sree Devi */}
          <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow border border-[#EAD6CC] group relative">
            <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-[#EAD6CC]">
              <img
                src="/sree.jpg"
                alt="img"
                className="w-full h-full object-cover group-hover:opacity-20 transition duration-300"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <p className="text-sm text-[#2D2D2D] font-semibold">Frontend Developer</p>
                <p className="text-xs text-[#7A6E68] mt-1">React.js | HTML | TAILWINDCSS |JAVA SCRIPTS</p>
              </div>
            </div>
            <h2 className="text-xl font-semibold text-[#2D2D2D]">Sree Devi R M</h2>
            <p className="text-[#7A6E68] mt-2">Creator & Developer</p>
          </div>

          {/* Ashmitha Ragavi */}
          <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow border border-[#EAD6CC] group relative">
            <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-[#EAD6CC]">
              <img
                src="/ashmitha.jpg"
                alt="Ashmitha Ragavi S"
                className="w-full h-full object-cover group-hover:opacity-20 transition duration-300"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <p className="text-sm text-[#2D2D2D] font-semibold">Frontend Developer</p>
                <p className="text-xs text-[#7A6E68] mt-1">React.js | HTML | TAILWINDCSS |JAVA SCRIPT </p>
              </div>
            </div>
            <h2 className="text-xl font-semibold text-[#2D2D2D]">Ashmitha Ragavi S</h2>
            <p className="text-[#7A6E68] mt-2">Creator & Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
}