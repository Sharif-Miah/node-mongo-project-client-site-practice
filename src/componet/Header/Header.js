import React from 'react';
import './Headers.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <Link to='/home'>Home</Link>
            <Link to='/users'>users</Link>
        </div>
    );
};

export default Header;