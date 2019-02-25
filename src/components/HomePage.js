import React from 'react';
import ProjectList from './ProjectList'

const HomePage = (props) => {
    return(
        <div className="home-page">
            <div className="header">
                <div className="divider">
                </div>
            </div>
            <ProjectList projects={props.data}/>
        </div>
    );
}
export default HomePage;