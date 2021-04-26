import React from 'react';
import { FeaturedProjectCard } from '../';
import ProjectsData from '../../fixtures/projectData.json';
export default function FeaturedProjects() {
    return (
        <div id='projects' className='featured-projects'>
            <h3 className='featured-projects__title'>featured projects</h3>
            <div className='vertical-spacer'></div>

            {ProjectsData.filter(({ featured }) => featured).map(
                ({ id, ...restProps }) => (
                    // console.log(project)
                    <FeaturedProjectCard key={id} {...restProps} />
                )
            )}
        </div>
    );
}