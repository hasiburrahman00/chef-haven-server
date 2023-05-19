import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Header = () => {

    const { user, logout } = useContext(AuthContext);
    const logoutUser = () => {
        logout();
    }


    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Home</a></li>
                            <li><a>Blog</a></li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Chef Hunter</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/">Home</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    
                    {
                        user ? <> {user.photoUrl}<img className='h-12 w-12 rounded-full' src={user?.photoURL} alt="" /> <Link className='btn ms-2' to="/login" onClick={logoutUser}>Logout</Link></> : 
                        <><Link className='btn' to="/login">Login</Link>
                        <Link className="btn ms-2" to="/register">Register</Link></>
                    }

                </div>
            </div>
        </div>
    );
};

export default Header;