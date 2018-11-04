import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectList = (props) => {
    return(
        <div className="project-list">
            {props.projects.map((project, index) => <ProjectCard key={index} project={project} />)}
        </div>
    );
}
export default ProjectList;