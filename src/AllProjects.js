import React, { Component } from 'react';
import Data from './data';
import { Link } from 'react-router-dom';

class AllProjects extends Component {
  render() {
    const project = Data.all().map(project =>
      <Link to={'/projects/' + project.id}>
        <li className="project-container" key={project.id.toString()}>
          <img className="project-img" src={project.img} alt={project.title} />
          <div className="project-description">
            <h2>
              {project.title}
            </h2>
            <p>
              {project.shortDescription}
            </p>
          </div>
        </li>
      </Link>
    );
    return (
      <ul className="projects-container">
        {project}
      </ul>
    );
  }
}

export default AllProjects;
