import React, { forwardRef } from 'react';
import { ProjectCard } from '..';
import ProjectData from '../../fixtures/projectData.json';

export default forwardRef(function OtherProjects(
    { className, ...restProps },
    ref
) {
    return (
        <div ref={ref} className={`other-projects ${className}`} {...restProps}>
            <h5 className='other-projects__title'>Other Projects</h5>
            <div className='vertical-spacer'></div>
            <div className='other-projects__container'>
                {ProjectData.filter(({ featured }) => featured === false).map(
                    ({ id, ...restProps }, index) => {
                        return <ProjectCard key={id} {...restProps} />;
                    }
                )}
            </div>
        </div>
    );
});
