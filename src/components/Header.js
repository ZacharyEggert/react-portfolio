import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {



return (
    <header className='py-2 bg-black bg-opacity-70'>
        <nav className='flex flex-row justify-between px-2 py-2'>
            <Link className='link-button' to='/'>Home</Link>
            <Link className='link-button' to='/about'>About</Link>
            <Link className='link-button' to='/works'>Works</Link>
            <Link className='link-button' to='/contact'>Contact</Link>
        </nav>
    </header>
)
}

export default Header