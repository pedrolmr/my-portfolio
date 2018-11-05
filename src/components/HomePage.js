import React from 'react';
import ProjectList from './ProjectList'

const HomePage = (props) => {
    return(
        <div className="home-page">
            <header>
                <h1>Pedro Montesinos</h1>
            </header>
            <ProjectList projects={props.data}/>
        </div>
    );
}
export default HomePage;