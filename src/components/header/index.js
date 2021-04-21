import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

export default function Header() {
    return (
        <nav className='nav'>
            <span id='nav__logo'>
                <a href={ROUTES.HOME}></a>
            </span>
            <ul className='nav__menu'>
                <li>
                    <NavLink className='nav__menu__link' exact to={ROUTES.HOME}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className='nav__menu__link'
                        exact
                        to={ROUTES.PROJECTS}
                    >
                        Projects
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className='nav__menu__link'
                        exact
                        to={ROUTES.ABOUT}
                    >
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className='nav__menu__link'
                        exact
                        to={ROUTES.CONTACT}
                    >
                        Contact
                    </NavLink>
                </li>
            </ul>
            <div className='nav__toggle'>
                <div className='span'></div>
            </div>
        </nav>
    );
}
