import React from 'react';
import './SkillsInterests.css';

function SkillsAndInterests() {
  return (
    <div className="skills-interests">
      <section className="skills">
        <h1>Skills</h1>
        <div className="skills-container">
          <div className="skill-category">
            <h3>Programming Languages</h3>
            <ul>
              <li>Python (Intermediate)</li>
              <li>C (Intermediate)</li>
              <li>C++ (Basic)</li>
              <li>Java (Intermediate)</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Web Development</h3>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Tools & Technologies</h3>
            <ul>
              <li>MS Office (Word, Excel, PowerPoint)</li>
              <li>Google Workspace (Docs, Sheets, Slides)</li>
              <li>Canva</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Soft Skills</h3>
            <ul>
              <li>Time Management</li>
              <li>Organizational Skills</li>
              <li>Multitasking</li>
              <li>Problem Solving</li>
              <li>Teamwork</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SkillsAndInterests;
