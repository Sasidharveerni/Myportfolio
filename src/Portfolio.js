import React from 'react';

import EducationBackground from './EducationBackground';
import Project from './Projects';


import Profile from './Profile'
import './App.css';
import ResumePreview from './Resume';






const Portfolio = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between flex-wrap py-6">
            <div className="flex items-center flex-shrink-0 text-gray-800 mr-6">
              <span className="font-semibold text-xl tracking-tight"> My Portfolio</span>
            </div>
            <div className="block lg:hidden">
              <button
                className="flex items-center px-3 py-2 border rounded text-gray-800 border-gray-800 hover:text-gray-500 hover:border-gray-500"
                type="button"
              >
                <svg
                  className="fill-current h-3 w-3"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Menu</title>
                  <path
                    d="M0 2.5A2.5 2.5 0 0 1 2.5 0h15A2.5 2.5 0 0 1 20 2.5v2.876a2.5 2.5 0 0 1-2.5 2.5H2.5A2.5 2.5 0 0 1 0 5.376V2.5zm0 5A2.5 2.5 0 0 1 2.5 5h15A2.5 2.5 0 0 1 20 7.5v2.876a2.5 2.5 0 0 1-2.5 2.5H2.5A2.5 2.5 0 0 1 0 10.376V7.5zm0 5A2.5 2.5 0 0 1 2.5 10h15A2.5 2.5 0 0 1 20 12.5v2.876a2.5 2.5 0 0 1-2.5 2.5H2.5A2.5 2.5 0 0 1 0 15.376v-2.876z"
                  />
                </svg>
              </button>
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
              <div className="text-sm lg:flex-grow">
                <a
                  href="#home"
                  className="block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-gray-500 mr-4"
                >
                  Home
                </a>
                <a
                  href="#home"
                  className="block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-gray-500 mr-4"
                >
                  About
                </a>
                <a
                  href="#education"
                  className="block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-gray-500 mr-4"
                >
                  Education
                  </a>
                <a
                  href="#project"
                  className="block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-gray-500"
                >
                  Projects
                </a>
              </div>
              <div className="inline-block text-sm px-4 py-2 leading-none border rounded text-gray-800 border-gray-800 hover:border-transparent hover:text-white hover:bg-gray-800 mt-4 lg:mt-0 mr-4">
                <ResumePreview/>
              </div>
              <div>
                <a
                  href="mailto:sasidharveerni2@gmail.com"
                  className="inline-block text-sm px-4 py-2 leading-none border rounded text-gray-800 border-gray-800 hover:border-transparent hover:text-white hover:bg-gray-800 mt-4 lg:mt-0"
                >
                  Hire Me
                </a>
        
              </div>
            </div>
          </nav>
        </div>
      </header>
      <div className="container mx-auto px-4">
          {/* <nav className="flex items-center justify-between flex-wrap py-6">
     */}
     <section id = "home">
      <Profile/>
     </section>
      <section id = "education">
        <EducationBackground />
      </section>
{/* </nav> */}
      </div>
      <section id = "project">
        <Project />

      </section>

      <footer className="bg-gray-800 py-1 mt-12">
        <div className="container mx-auto px-2 mt-8">
          <p className="text-center text-gray-300 mt-2 mb-4">© 2023 Sasi. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio ;
