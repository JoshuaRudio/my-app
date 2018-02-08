import React, { Component } from 'react';
import Data from './data.js';

class ProjectCard extends Component {
  render() {
    const project = Data.get(parseInt(this.props.match.params.id, 10));
    return (
      <div className="project-card-container">
        <img className="project-card-img" src={project.img} alt={project.title} />
        <div className="project-description">
          <h2>
            {project.title}
          </h2>
          <p>
            Description: {project.longDescription}
          </p>
          <p>
            Role: {project.role}
          </p>
          <div className="button-container">
            <div className="button">
              <a href={project.website} target="_blank" rel="noopener noreferrer">
                View Live
              </a>
            </div>
          </div>
          <div className="button-container">
            <div className="button">
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                See Source
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectCard;
