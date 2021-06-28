import React from 'react';


const Project = (props) => {

    const {project} = props;

    const {github, title, description, deployedLink} = project;

return (
    <div>
        <a href={github}><div>
            <h3>{title}</h3>
        </div></a>

        <a href={deployedLink}><div>
            <p>{description}</p>    
        </div></a>

    </div>
)
}

export default Project