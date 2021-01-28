import React, { useState, useEffect } from 'react';

import { Work, ProjectSection } from './../styles/styles';
import ProjectCard from './../components/ProjectCard';
import { Link } from 'react-router-dom';
import ProjectListCard from '../components/ProjectListCard';
const WorkScreen = ({ projects }) => {
  return (
    <Work style={{ margin: '5% auto 0 auto' }}>
      <div className='work-intro'>
        <h2>Projects</h2>
      </div>
      <ProjectSection>
        {projects.map((project) => (
          <ProjectListCard project={project} key={project.id} />
        ))}
      </ProjectSection>
    </Work>
  );
};

export default WorkScreen;
