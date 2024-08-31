import React from 'react';
import './Resume.css';

/**
 * Resume component
 *
 * Renders a resume page with an iframe to display the resume PDF and a download link.
 */
function Resume() {
  return (
    <div className="resume">
      <h1>Resume</h1>
      <div className="iframe-container">
        <iframe
          src="Sanjana Resume.pdf"
          width="1200"
          height="800"
          title="Sanjana Shetty"
        />
      </div>
      <div className="download-link-container">
        <a
          href="Sanjana Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="download-link"
        >
          Download My Resume
        </a>
      </div>
    </div>
  );
}

export default Resume;