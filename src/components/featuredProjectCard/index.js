import React from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

export default function FeaturedProjectCard({
    githubLink,
    websiteLink,
    img,
    title,
    shortDesc,
    tags,
}) {
    // const { githubLink, websiteLink, img, title, shortDesc, tags } = props;
    return (
        <div className='featured-project-card'>
            {/* <div className='featured-project-card__wrapper'> */}
            <img src={img} alt={title} className='featured-project-card__img' />
            <div className='featured-project-card__inner'>
                <div className='featured-project-card__top'>
                    <div className='featured-project-card__top__left'>
                        <h5 className='featured-project-card__inner__sub-title'>
                            Featured Project
                        </h5>
                    </div>
                    <div className='featured-project-card__top__right'>
                        <NavLink
                            className='featured-project-card__link'
                            exact
                            to={githubLink}
                        >
                            <FiGithub className='featured-project-card__ic-github' />
                        </NavLink>
                        <NavLink
                            className='featured-project-card__link'
                            exact
                            to={websiteLink}
                        >
                            <FiExternalLink className='featured-project-card__ic-external-link' />
                        </NavLink>
                    </div>
                </div>

                <h3 className='featured-project-card__inner__title'>{title}</h3>
                <div className='featured-project-card__description'>
                    {shortDesc}
                </div>
                <div className='featured-project-card__footer'>
                    {tags.map((tag, index) => {
                        return <span key={index}>{tag}</span>;
                    })}
                </div>
            </div>
            {/* </div> */}
        </div>
    );
}
