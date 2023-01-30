import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start lg:hidden">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to={""}>Homepage</Link></li>
                        <li><Link to={""}>Portfolio</Link></li>
                        <li><Link to={""}>About</Link></li>
                        <li><Link to={""}>Contact</Link></li>
                        <li><Link to={""}>Dashboard</Link></li>
                    </ul>
                </div>
            </div>

            <div className="navbar-start hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to={""}>Home</Link></li>
                    <li><Link to={""}>About</Link></li>
                </ul>
            </div>

            <div className="navbar-center">
                <Link to={""} className="btn btn-ghost font-serif normal-case text-5xl">Sayed Blog</Link>
            </div>

            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to={""}>Contact</Link></li>
                    <li><Link to={""}>Dashboard</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;