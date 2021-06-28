import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {

    
return(
        <main className='flex flex-col justify-center w-full min-h-full align-items-center'>
            <div className='text-2xl font-semibold'>
                My name is<span className='hidden sm:inline'>&nbsp;</span><br className='sm:hidden '/><span className='font-bold text-[#F62211]'>Zachary Eggert</span>.
                <br/>
                I'm a web developer.
                <br/>
                <Link className='link-button' to='/works'>
                    View Works ➞
                </Link>
            </div>
            
        </main>
)
}


export default Home;