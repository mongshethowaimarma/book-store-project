import React from 'react';
import { BoltIcon } from '@heroicons/react/24/solid'
import { Link, NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <div className='flex items-center justify-between'>
           <Link to ='/' className='inline-flex items-center'>
                <BoltIcon className='h-6 w-6 text-blue-500'></BoltIcon>
                <span className='ml-2 text-xl font-bold tracking-wide text-gray-800'>nextPage</span>
           </Link>
           {/* navlink section */}
           <ul className=''>
            <li>
                <NavLink to ='/' >Home</NavLink>
            </li>
            <li>
                <NavLink to='/books'>Books</NavLink>
            </li>
            <li>
                <NavLink to ='/about'>About us</NavLink>
            </li>
           </ul>
        </div>
    );
};

export default Header;