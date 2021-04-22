import React, { forwardRef } from 'react';
import { ProjectCard } from '..';
import ProjectData from '../../fixtures/projectData.json';

export default forwardRef(function OtherProjects(
    { className, ...restProps },
    ref
) {
    return (
        <div ref={ref} className={`other-projects ${className}`} {...restProps}>
            <h5>Other Projects</h5>
            <div className='other-projects__container'>
                {ProjectData.map(({ id, ...restProps }, index) => {
                    return <ProjectCard key={id} {...restProps} />;
                })}
            </div>
        </div>
    );
});
