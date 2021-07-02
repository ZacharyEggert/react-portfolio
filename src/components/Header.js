import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {



return (
    <header className='w-100% py-2 bg-black bg-opacity-70 px-8 sm:px-32'>
        <nav className='flex flex-row justify-between px-2 py-2 w-100%'>
            <Link className='text-xl text-white sm:text-3xl' to='/'>Home</Link>
            <Link className='text-xl text-white sm:text-3xl' to='/about'>About</Link>
            <Link className='text-xl text-white sm:text-3xl' to='/works'>Works</Link>
            <Link className='text-xl text-white sm:text-3xl' to='/contact'>Contact</Link>
        </nav>
    </header>
)
}

export default Header