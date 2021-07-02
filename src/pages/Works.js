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
    <div className='w-100%'>
        <Header />
        <main>

            <div className='flex flex-row flex-wrap max-w-6xl mx-auto mt-16'>
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