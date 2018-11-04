import React from 'react';
import ProjectList from './ProjectList'

const HomePage = (props) => {
    return(
        <div className="home-page">
            <ProjectList projects={props.data}/>
        </div>
    );
}
export default HomePage;