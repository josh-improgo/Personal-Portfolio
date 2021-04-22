import React, { useState } from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { AiOutlineFolder, AiOutlineFolderOpen } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

export default function ProjectCard({
    id,
    githubLink,
    websiteLink,
    title,
    shortDesc,
    tags,
}) {
    const [active, setActive] = useState(false);

    // @TODO: Clickable Link; Check createBrowserHistory from 'history' ?

    return (
        <div
            className={`project-card ${active ? 'project-card--active' : ''}`}
            onMouseEnter={() => setActive(true)}
            onMouseLeave={() => setActive(false)}
            // onClick={onClickProject}
        >
            <div className='project-card__inner'>
                <div className='project-card__header'>
                    <div className='project-card__top'>
                        <div className='project-card__top__left'>
                            <AiOutlineFolder className='project-card__ic-folder' />
                            <AiOutlineFolderOpen className='project-card__ic-folder-open' />
                        </div>
                        <div className='project-card__top__right'>
                            <NavLink
                                className='project-card__link'
                                exact
                                to={githubLink}
                            >
                                <FiGithub className='project-card__ic-github' />
                            </NavLink>
                            <NavLink
                                className='project-card__link'
                                exact
                                to={websiteLink}
                            >
                                <FiExternalLink className='project-card__ic-external-link' />
                            </NavLink>
                        </div>
                    </div>
                    <div className='project-card__title'>{title}</div>
                </div>

                <div className='project-card__description'>{shortDesc}</div>
                <div className='project-card__footer'>
                    {tags.map((tag, index) => {
                        return <span key={index}>{tag}</span>;
                    })}
                </div>
            </div>
        </div>
    );
}
