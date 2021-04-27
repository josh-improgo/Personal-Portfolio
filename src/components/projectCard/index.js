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
                            {githubLink !== '' ? (
                                <a
                                    className='project-card__link'
                                    href={githubLink}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <FiGithub className='project-card__ic-github' />
                                </a>
                            ) : null}
                            {websiteLink !== '' ? (
                                <a
                                    className='project-card__link'
                                    href={websiteLink}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <FiExternalLink className='project-card__ic-external-link' />
                                </a>
                            ) : null}
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
