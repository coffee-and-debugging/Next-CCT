import React from "react";

export default function AppHeader() {
  return (
    <nav className="bg-gray-800 py-2">
      <div className="container mx-auto flex items-center justify-between px-7">
        <a href="/" className="flex items-center text-white">
          <img src="/images/Logo.png" width={75} alt="LOGO" />
        </a>
        <div className="hidden md:block">
          <ul className="flex space-x-10 text-white">
            <li><a href="#Home" className="hover:text-blue-300 font-medium text-xl">Home</a></li>
            <li><a href="#About" className="hover:text-blue-300 font-medium text-xl">About</a></li>
            <li><a href="#Skills" className="hover:text-blue-300 font-medium text-xl">Skills</a></li>
            <li><a href="#Projects" className="hover:text-blue-300 font-medium text-xl">Projects</a></li>
            <li><a href="#Experiences" className="hover:text-blue-300 font-medium text-xl">Experiences</a></li>
            <li><a href="#Contact" className="hover:text-blue-300 font-medium text-xl">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}