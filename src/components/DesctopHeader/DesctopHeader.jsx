import React from 'react';
import logo from '../../assets/img/catLogo.png'
import logoTest from '../../assets/img/logoText.png'
import {NavLink} from 'react-router-dom';
import {Logo} from "../Icons";

const DesctopHeader = () => {
    return (
        <div className={'header-wrapper'}>
            <div className={'header-logo-wrapper'}>
                <a href={"https://abz.agency/?gclid=Cj0KCQiAuP-OBhDqARIsAD4XHpfSLAabJMq-y3cPnk8bcRgRJhoyz67yIZ9Cy2NAMDeeOhewjUevLlEaAgsFEALw_wcB"} className={'header-logo-link'}>
                <Logo/>
                </a>
            </div>
            <ul className={"header-list-wrapper"}>
                <NavLink to="/" className={'header-list-item-link'}>
                    <li className={'item'}>About me</li>
                </NavLink>
                <NavLink to="/relationship" className={'header-list-item-link'}>
                    <li className={'item'}>Relationships</li>
                </NavLink>
                <NavLink to="/requirements" className={'header-list-item-link'}>
                    <li className={'item'}>Requirements</li>
                </NavLink>
                <NavLink to="/users" className={'header-list-item-link'}>
                    <li className={'item'}>Users</li>
                </NavLink>
                <NavLink to="/form" className={'header-list-item-link'}>
                    <li className={'item'}>Sign Up</li>
                </NavLink>
            </ul>

        </div>
    );
};

export default DesctopHeader;