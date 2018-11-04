import React from 'react';

const ProjectCard = (props) => {
    return (
        <div className="project-card">
            <h1>{props.project.title}</h1>
            <p>{props.project.description}</p>
            <img src={props.project.image} alt="Lamnda Notes"/>
        </div>
    );
}
export default ProjectCard;