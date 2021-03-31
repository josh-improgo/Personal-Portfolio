import React from 'react'
import { Project } from '../components'
import projectsData from '../fixtures/projects'

export function ProjectContainer() {
    return (
        <Project>
            <Project.Title>PROJECTS</Project.Title>
            <Project.BackgroundText>PROJECTS</Project.BackgroundText>
            {projectsData.map(({id, title, description, image, tags}) => (
                <Project.Frame>
                    <Project.Content key={id}>
                        <Project.SubTitle>{title}</Project.SubTitle>
                        <Project.Text>{description}</Project.Text>
                        {tags.map(tag => (
                            <Project.Tag>{tag}</Project.Tag>
                        ))}
                    </Project.Content>
                    <Project.ImageContainer>
                        <Project.Image src={image} alt={title}/>
                    </Project.ImageContainer>
                </Project.Frame>

            ))}
        </Project>
    )
}
