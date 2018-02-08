import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import ProjectCard from './ProjectCard.js';
import AllProjects from './AllProjects';

class Projects extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/projects" component={AllProjects} />
        <Route exact path="/projects/:id" component={ProjectCard} />
      </Switch>
    );
  }
}

export default Projects;
