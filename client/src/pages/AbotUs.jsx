import React from 'react';
import bgabImg from '../images/bgab.jpg'; // Ensure this path is correct

 function AbotUs() {
  return (

    <div className="max-h-screen  bg-center bg-cover bg-no-repeat text-[#2D2D2D] px-6 py-16 "
  style={{backgroundImage: `url(${bgabImg})` 
  }}>
        <h1 className="text-4xl font-extrabold mb-6 text-center tracking-wide">
          About Us
        </h1>

        <p className="mb-8 text-lg leading-relaxed text-center text-black/90">
          Welcome to our <span className="font-semibold text-[#020100]">Research Paper Management Platform</span> — 
          your go-to solution for organizing, accessing, and managing research documents with ease.
        </p>

        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            🔍 What This Platform Does
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-black/80 text-base">
            <li>Organizes uploaded research papers securely</li>
            <li>Provides easy access to stored documents at any time</li>
            <li>Facilitates personal library creation for long-term reference</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            🎯 Our Mission
          </h2>
          <p className="text-gray/80 text-base leading-relaxed">
            Our goal is to simplify research document management for academic communities by offering a clean,
            user-friendly interface with powerful storage and retrieval features. We aim to streamline your workflow
            and support your academic success through organized knowledge sharing.
          </p>
        </div>
      </div>
  );
}
export default AbotUs;