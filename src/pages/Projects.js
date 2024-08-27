import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <div className="projects">
      <h2>Projects</h2>
      <div className="projects_container">
        <div className="card">
          <h3>vAIdya</h3>
          <p>The idea centers around developing and implementing a comprehensive health analysis app called "vAIdyah."
             This app leverages the power of artificial intelligence and medical expertise to offer users personalized health
             analyses based on their historical medical data and current health conditions.
             The app collaborates with medical professionals, including experienced doctors and interns, to provide users with
             accurate health insights and recommendations.</p>
        </div>
        <div className="card">
          <h3>K-Means Clustering</h3>
          <p>K Means Clustering is an Unsupervised Machine Learning Algorithm that groups unlabeled, unclassified
             datasets into different clusters. The machine organizes unsorted data according to parallels or similar patterns
             and variations.
             K means Clustering assigns data points to one of the k clusters depending on their distance from the center of the
             clusters.
             Customer segmentation is a key marketing strategy that helps businesses understand their customer base and
             tailor their marketing efforts to specific groups.
             In this analysis, we use the KMeans Clustering algorithm to segment customers of a mall based on their annual
             income and spending score.</p>
        </div>
        <div className="card">
          <h3>Spam News Detection</h3>
          <p>Spam news detection and classification have become critical in today's digital era, where misinformation and fake
             news spread rapidly. This report demonstrates the process of detecting and classifying spam news using machine learning techniques.</p>
        </div>
        <div className="card">
          <h3>WiseBudget</h3>
          <p>WiseBudget is a student financial website designed to empower users with tools and resources for effective
             budgeting and financial management.</p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
