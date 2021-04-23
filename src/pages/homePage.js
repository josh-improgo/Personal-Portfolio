import React, { useRef, useEffect } from 'react';
import { Hero, OtherProjects, FeaturedProjects } from '../components';
import { TweenLite } from 'gsap';
import { useInView } from 'react-intersection-observer';

export default function Home() {
    let homePage = useRef(null);
    const { ref, inView } = useInView({
        threshold: 0.2,
    });

    const fadeIn = (element) => {
        TweenLite.to(element, 1.5, {
            opacity: 1,
            ease: 'power4.out',
            stagger: { amount: 0.3 },
        });
    };
    const fadeOut = (element) => {
        TweenLite.to(element, 1.5, {
            opacity: 0,
            ease: 'power4.out',
        });
    };

    inView ? fadeIn('.fade--other-projects') : fadeOut('.fade--other-projects');
    useEffect(() => {
        TweenLite.to(homePage, 0, {
            css: {
                visibility: 'visible',
            },
        });
    });
    return (
        <div className='home-page' ref={(e) => (homePage = e)}>
            <Hero />
            <FeaturedProjects />
            <OtherProjects className='fade--other-projects' ref={ref} />
        </div>
    );
}
