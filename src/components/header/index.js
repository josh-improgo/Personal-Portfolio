import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import { Twirl as Hamburger } from 'hamburger-react';
import disableScroll from 'disable-scroll';
export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            disableScroll.on();
        } else {
            disableScroll.off();
        }
        return;
    }, [isOpen]);

    return (
        <nav className='nav'>
            {/* <div className='nav__top'> */}
            <span className='nav__logo'>
                <a href={ROUTES.HOME}>josh improgo</a>
            </span>

            <div className='nav__hamburger'>
                <Hamburger toggled={isOpen} toggle={setIsOpen} />
            </div>
            <ul className={`nav__menu ${isOpen ? '' : 'nav__menu--open'}`}>
                <li className='nav__menu__item'>
                    <NavLink className='nav__menu__link' exact to={ROUTES.HOME}>
                        home
                    </NavLink>
                </li>
                <li className='nav__menu__item'>
                    <NavLink
                        className='nav__menu__link'
                        exact
                        to={ROUTES.PROJECTS}
                    >
                        projects
                    </NavLink>
                </li>
                <li className='nav__menu__item'>
                    <NavLink
                        className='nav__menu__link'
                        exact
                        to={ROUTES.ABOUT}
                    >
                        about
                    </NavLink>
                </li>
                <li className='nav__menu__item'>
                    <NavLink
                        className='nav__menu__link'
                        exact
                        to={ROUTES.CONTACT}
                    >
                        contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}
