import React from 'react';
export default function About() {
    let image = '/images/profile-picture.jpg';

    return (
        <div className='about'>
            <h2 className='about__header'>About me</h2>
            <img src={image} alt='' className='about__img' />

            <div className='about__container'>
                <h3 className='about__sub-header'>
                    Full-Stack Developer / QC Student
                </h3>
                <p className='about__text'>
                    I have a craving for learning new technologies and a knack
                    for writing code that solves problems and delivers unique
                    experiences.
                </p>
            </div>
        </div>
    );
}
