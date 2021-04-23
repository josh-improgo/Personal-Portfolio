import React from 'react';
import { FeaturedProjectCard } from '../';
import ProjectsData from '../../fixtures/projectData.json';
export default function FeaturedProjects() {
    return (
        <div className='featured-projects'>
            <h3 className='featured-projects__title'>Featured Projects</h3>
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
