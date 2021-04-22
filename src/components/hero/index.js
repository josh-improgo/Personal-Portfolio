import React, { useRef, useEffect } from 'react';
import { CgChevronDown } from 'react-icons/cg';
import { TweenLite, Power3 } from 'gsap';
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
        <div className='hero'>
            <div className='hero__container'>
                <h1
                    ref={(e) => {
                        header = e;
                    }}
                    className='hero__header typewriter anim-typewriter'
                >
                    Hello I'm Josh Improgo
                </h1>
            </div>
            <button
                ref={(e) => {
                    scrollButton = e;
                }}
                className='hero__scroll-down'
                onClick={handleOnClick}
            >
                <CgChevronDown className='hero__scroll-down__ic' />
            </button>
        </div>
    );
}
