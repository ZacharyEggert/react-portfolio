import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

import Project from '../components/Project';
import { useGlobalContext } from '../util/GlobalState';


const Works = () => {

    // eslint-disable-next-line no-unused-vars
    const [globalState, reducer] = useGlobalContext();
    
    const {projects} = globalState;

    
return(
    <div className='page-wrapper'>
        <Header />
        <main>

            <div>
                {projects.map(project => {
                    return (
                        <Project project={project} key={project.title}/>
                    )
                })}
            </div>
        </main>
        <Footer />
    </div>
)

}


export default Works;