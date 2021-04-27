import React, { useRef, useEffect } from 'react';
import { CgChevronDown } from 'react-icons/cg';
import { TweenLite, Power3 } from 'gsap';
import { Link } from 'react-scroll';
export default function Hero() {
    let scrollButton = useRef(null);
    let header = useRef(null);
    useEffect(() => {
        TweenLite.to(scrollButton, 0.8, {
            opacity: 1,
            y: -20,
            ease: Power3.easeOut,
            delay: 0.7,
        });

        TweenLite.to(header, 1.2, {
            opacity: 1,
            y: -20,
            ease: Power3.easeOut,
        });
    }, []);

    const handleOnClick = () => {
        console.log('Clicked');
    };
    return (
        <div id='home' className='hero'>
            <div className='hero__container'>
                {/* <h4>My name is</h4> */}
                <h1
                    className='hero__header typewriter anim-typewriter'
                    ref={(e) => {
                        header = e;
                    }}
                >
                    Josh Improgo
                </h1>
            </div>
            {/* <button
                ref={(e) => {
                    scrollButton = e;
                }}
                className='hero__scroll-down'
                onClick={handleOnClick}
            > */}
            <div
                className='hero__scroll-down'
                ref={(e) => {
                    scrollButton = e;
                }}
            >
                <Link
                    activeClass='active'
                    to='projects'
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={1000}
                >
                    <CgChevronDown className='hero__scroll-down__ic' />
                </Link>
            </div>

            {/* </button> */}
        </div>
    );
}
