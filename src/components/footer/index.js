import React, { forwardRef } from 'react';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
export default forwardRef(function Footer({ className, ...restProps }, ref) {
    return (
        <footer ref={ref} className={`footer ${className}`}>
            <div className='footer__spacer'></div>
            <p>Have an exciting project? Let's talk</p>
            <div className='footer__contacts'>
                <div className='footer__socials'>
                    <div className='footer__inner'>
                        <div className='footer__sub-heading'>follow me</div>
                        <a className='footer__link' href={ROUTES.GITHUB}>
                            <FaGithubSquare className='footer__ic' />
                            <p>josh-improgo</p>
                        </a>
                        <a className='footer__link' href={ROUTES.LINKEDIN}>
                            <FaLinkedin className='footer__ic' />
                            <p>josh-improgo</p>
                        </a>
                    </div>
                </div>
                <div className='footer__email'>
                    <div className='footer__inner'>
                        <div className='footer__sub-heading'>say hello</div>
                        <NavLink
                            className='footer__link'
                            exact
                            to={ROUTES.CONTACT}
                        >
                            <AiOutlineMail className='footer__ic' />
                            <p>josh.improgo@gmail.com</p>
                        </NavLink>
                    </div>
                </div>
            </div>
            <div className='footer__trademark'>
                &copy; - Designed by Josh Improgo
            </div>
        </footer>
    );
});
