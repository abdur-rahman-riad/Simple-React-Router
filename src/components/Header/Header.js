import React from 'react';
import "./Header.css";
import { NavLink } from 'react-router-dom';

const Header = () => {
    const activeStyle = {
        backgroundColor: "red"
    }
    return (
        <div className="nav-bar">
            <NavLink
                activeStyle={activeStyle}
                className="nav-item"
                to="/home"
            >Home</NavLink>

            <NavLink
                activeStyle={activeStyle}
                className="nav-item"
                to="/friends"
            >Friends</NavLink>

            <NavLink
                activeStyle={activeStyle}
                className="nav-item"
                to="/about"
            >About</NavLink>
        </div >
    );
};

export default Header;