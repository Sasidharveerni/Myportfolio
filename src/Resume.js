import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import './ResumePreview.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const ResumePreview = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleDownloadResume = () => {
    window.open('./Resume2.pdf', '_blank');
  };

  return (
    <div>
      {/* Other components and content */}
      <button onClick={handleOpenModal}>Preview Resume</button>

      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
          <button className="download-button text-gray-800 mt-14" onClick={handleDownloadResume}>
          <img width="100" height="100" src="https://img.icons8.com/ios-glyphs/90/download--v1.png" alt="download--v1"/>
              </button>
              <button className="close-button text-gray-800 mt-8" onClick={handleCloseModal}>
              <img width="25" height="25" src="https://img.icons8.com/plumpy/96/delete-sign--v1.png" alt="delete-sign--v1"/>
              </button>
      
        
            <div className="modal-body">
              <Document file="./Resume2.pdf">
                <Page pageNumber={1} width={400} />
              </Document>
            </div>
        
          </div>
        </div>
      )}
    </div>
  );
};

export default ResumePreview;
