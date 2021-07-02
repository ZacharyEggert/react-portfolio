import React from 'react';


const Project = (props) => {

    const {project} = props;

    const {github, title, description, deployedLink, bgImage} = project;
    
    let banner = '/assets/images/' + (bgImage?bgImage:'florian-olivo-4hbJ-eymZ1o-unsplash.jpg'); 

return (
    <div className='flex-1 first:flex-grow-[2] min-w-[35%] first:min-w-[80%] mx-12 my-12 bg-opacity-95 bg-[#191919] hover:bg-[#212121]'>
        <a className='hover:text-white' href={github}><div style={{backgroundImage:`url(${window.location.origin + banner})`}} className='relative w-full h-24 bg-local bg-cover sm:h-48 '>
            <div className='absolute flex flex-row justify-center w-full text-center -bottom-6'><h3 className='py-1 px-4 font-semibold text-center bg-[#191919] border-4 border-red-600 border-solid text-2xl'>{title}</h3></div>
        </div></a>

        <a className='hover:text-white' href={deployedLink}><div className='w-full p-8 px-16 pt-4 '>
            <p className='mx-auto mt-8 mb-8 max-w-[100ch]'>{description}</p>
        </div></a>

    </div>
)
}

export default Project