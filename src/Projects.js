import React from "react";
import './Education.css';

import Rentstyle from './images/RentStyle.jpg';
import vpa from './images/Vpa.jpg';
const Project = () =>{
    return (
    <div className="Parent">
        <div class="relative flex flex-col w-full max-w-[36rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md mt-12 spacing">
  <div class="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
    <img
      src= {Rentstyle}
      alt="E-store"
      class="h-full w-full object-cover"
    />
  </div>
  <div class="p-6">
    <h6 class="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
      Projects
    </h6>
    <h4 class="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
      RentStyle - An Ecommerce Platform
    </h4>
    <p class="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
    As a part of a personal project, I developed RentStyle, a full-stack application using React and Next.js. RentStyle is an innovative platform that enables users to rent clothes for various occasions. 
    The application provides a user-friendly interface where users can browse through a wide range of clothing options, select their desired items, and rent them for a specific duration.
    </p>
    <a class="inline-block" href="#learnmore">
      <button
        class="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
      >
        Learn More
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          aria-hidden="true"
          class="h-4 w-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          ></path>
        </svg>
      </button>
    </a>
  </div>
</div>

<div class="relative flex flex-col w-full max-w-[36rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md mt-12 spacing">
  <div class="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
    <img
      src= {vpa}
      alt="Zen-img"
      class="h-full w-full object-cover"
    />
  </div>
  <div class="p-6">
    <h6 class="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
      Projects
    </h6>
    <h4 class="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
      Zen - A Virtual Private Assistant 
    </h4>
    <p class="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
    As part of my academic project, I developed "Zen," a virtual private assistant powered by Automatic Speech Recognition (ASR) technology. 
    Zen is designed to provide seamless voice-based interactions and assist users with various tasks, such as scheduling appointments, managing reminders, and answering queries. 
    </p>
    <a class="inline-block" href="#learnmore">
      <button
        class="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
      >
        Learn More
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          aria-hidden="true"
          class="h-4 w-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          ></path>
        </svg>
      </button>
    </a>
  </div>
</div>

</div>
    );
};



export default Project