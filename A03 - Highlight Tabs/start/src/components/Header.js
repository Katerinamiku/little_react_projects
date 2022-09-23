import React from 'react';
import Tab from "./Tab";
import {NavLink} from "react-router-dom";

const Header = () => {
    let activeClassName = ({isActive}) =>
        isActive ? 'is-active' : undefined
    return (
        <div className="tabs">
            <Tab>
                <NavLink to={'/'} end className={activeClassName}>Home</NavLink>
            </Tab>
            <Tab>
                <NavLink to={'/features'} className={activeClassName}>Features</NavLink>
            </Tab>
            <Tab>
                <NavLink to={'/about'} className={activeClassName}>About</NavLink>
            </Tab>
        </div>
    );
};

export default Header;
