import React, { useState, useEffect } from 'react';
import database from '../firebase-config.js';
import './Projects.css';

function Projects() {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const projectsRef = database.ref('projectsData'); // Reference the projectsData node

    projectsRef.on('value', (snapshot) => {
      if (snapshot.exists()) {
        console.log('Fetched projects:', snapshot.val()); // Debug log
        setProjects(snapshot.val());
      } else {
        console.log('No projects found.');
        setProjects([]); // Clear projects if none exist
      }
    }, setError);

    return () => projectsRef.off(); // Clean up listener on unmount
  }, []);

  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="projects">
      <h2>Projects</h2>
      <div className="projects_container">
        {
          projects.map((project, index) => (
            <div key={index} className="card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.url}>View To Learn More</a>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Projects;
