import React from 'react';
import './Education.css'
const EducationBackground = () => {
  return (
    <div className="edu py-12 mt-8 curved-div">
      <div className="container mx-auto">
        <h2 className="text mb-6">Education</h2>
        <div className="flex flex-wrap -mx-4">
        <p className='text word'>"As a computer science student, I have the opportunity to delve into various areas such as programming, algorithms, data structures, software development, artificial intelligence, and more. 
      The curriculum not only equips me with technical skills but also fosters problem-solving abilities, critical thinking, and logical reasoning."</p>
          <div className="w-full mt-4">
            <h3 className="text-2xl text-white mb-2 clg">R.V.R & J.C College Of Engineering</h3>
            <p className="text-white clg">Bachelor's in Computer Science</p>
            <p className="text-gray-300 clg">2019-2023</p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            {/* Add more education details here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationBackground;
