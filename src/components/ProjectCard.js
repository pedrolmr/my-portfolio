import React from 'react';

const ProjectCard = (props) => {
    return (
        <div className="project-card">
            <div className="title">
                {props.project.title}
            </div>

            <div className="project-image">
                <img src={props.project.image} alt="Lamnda Notes" />
            </div>

            <div className="project-footer">
                <p>{props.project.description}</p>
            </div>
        </div>
    );
}
export default ProjectCard;