import React, { useState, useEffect } from 'react';
import { Twirl as Hamburger } from 'hamburger-react';
import disableScroll from 'disable-scroll';
import { Link } from 'react-scroll';
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
                <Link
                    activeClass='active'
                    to='home'
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={1000}
                    className='nav__logo'
                >
                    josh improgo
                </Link>
                {/* <a href={ROUTES.HOME}>josh improgo</a> */}
            </span>

            <div className='nav__hamburger'>
                <Hamburger toggled={isOpen} toggle={setIsOpen} />
            </div>
            <ul className={`nav__menu ${isOpen ? '' : 'nav__menu--open'}`}>
                <li className='nav__menu__item'>
                    {/* <NavLink className='nav__menu__link' exact to={ROUTES.HOME}> */}

                    {/* <a className='nav__menu__link' href='#home'>
                        home
                    </a> */}
                    <Link
                        activeClass='active'
                        to='home'
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={1000}
                        className='nav__menu__link'
                    >
                        home
                    </Link>
                    {/* </NavLink> */}
                </li>
                <li className='nav__menu__item'>
                    {/* <NavLink
                        className='nav__menu__link'
                        exact
                        to={ROUTES.PROJECTS}
                    > */}
                    {/* <a className='nav__menu__link' href='#projects'>
                        projects
                    </a> */}
                    <Link
                        activeClass='active'
                        to='projects'
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={1000}
                        className='nav__menu__link'
                    >
                        projects
                    </Link>
                    {/* </NavLink> */}
                </li>
                {/* <li className='nav__menu__item'>
                    <NavLink
                        className='nav__menu__link'
                        exact
                        to={ROUTES.ABOUT}
                    >
                        about
                    </NavLink>
                </li> */}
                <li className='nav__menu__item'>
                    <Link
                        activeClass='active'
                        to='about'
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={1000}
                        className='nav__menu__link'
                    >
                        about
                    </Link>
                </li>
                <li className='nav__menu__item'>
                    {/* <NavLink
                        className='nav__menu__link'
                        exact
                        to={ROUTES.CONTACT}
                    > */}
                    {/* <a className='nav__menu__link' href='#contact'>
                        contact
                    </a> */}
                    <Link
                        activeClass='active'
                        to='contact'
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={1000}
                        className='nav__menu__link'
                    >
                        contact
                    </Link>
                    {/* </NavLink> */}
                </li>
            </ul>
        </nav>
    );
}
