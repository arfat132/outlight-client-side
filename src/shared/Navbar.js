import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Assests/logo.png';
const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-md px-12">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box font-medium">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/appoinment'>Appoinment</Link></li>
                        <li><Link to='/about'>ABout</Link></li>
                        <li><Link to=''>Blogs</Link></li>
                        <li><Link to=''>Contact</Link></li>
                    </ul>
                </div>
                <Link to='' className="normal-case w-52"><img src={logo} alt="" srcset="" /></Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0 ml-60 font-bold uppercase text-secondary">
                    <li><Link to=''>Home</Link></li>
                    <li><Link to='/about'>ABout</Link></li>
                    <li><Link to=''>Blogs</Link></li>
                    <li><Link to=''>Contact</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;