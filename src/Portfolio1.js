import React from 'react';

const Portfolio1 = () => {
  const projects = [
    {
      title: 'Zen - Virtual Private Assistant',
      description: 'As part of my academic project, I developed "Zen," a virtual private assistant powered by Automatic Speech Recognition (ASR) technology. Zen is designed to provide seamless voice-based interactions and assist users with various tasks, such as scheduling appointments, managing reminders, and answering queries. Leveraging machine learning algorithms and natural language processing techniques, Zen accurately recognizes and interprets user commands, ensuring an intuitive and efficient user experience. Additionally, Zen incorporates the WolframAlpha API to retrieve information and provide intelligent responses to user queries. The project demonstrates my expertise in NLP, ASR, and integrating external APIs to build an advanced virtual assistant.' ,
    },
    {
      title: 'RentStyle',
      description: 'As a part of a personal project, I developed RentStyle, a full-stack application using React and Next.js. RentStyle is an innovative platform that enables users to rent clothes for various occasions. The application provides a user-friendly interface where users can browse through a wide range of clothing options, select their desired items, and rent them for a specific duration. RentStyle includes features such as user authentication, search functionality, and seamless payment integration to ensure a smooth rental experience. By implementing responsive design principles and utilizing technologies like React and Next.js, RentStyle delivers a visually appealing and intuitive platform for users to access high-quality clothing for their specific needs.',
    },
    {
      title: 'Project 3',
      description: 'Pellentesque ullamcorper felis sed velit mattis, vitae dignissim sapien eleifend.',
    },
  ];

  const [currentProjectIndex, setCurrentProjectIndex] = React.useState(0);

  const handleNextProject = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mt-8 mb-6">Projects</h2>
      <div className="border border-gray-300 p-4 rounded-lg">
        <h3 className="text-xl font-bold mb-2">{projects[currentProjectIndex].title}</h3>
        <p>{projects[currentProjectIndex].description}</p>
        <button
          className="bg-blue-500 text-white px-4 py-2 mt-4 rounded"
          onClick={handleNextProject}
        >
          See Next Project
        </button>
      </div>
    </div>
  );
};

export default Portfolio1;
