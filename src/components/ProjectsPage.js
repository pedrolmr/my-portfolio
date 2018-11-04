import React from 'react';
import ProjectList from './ProjectList';

const ProjectsPage = (props) => {
    return (
        <div className="projects-page">
            <ProjectList projects={props.data} />
        </div>
    );
}
export default ProjectsPage;