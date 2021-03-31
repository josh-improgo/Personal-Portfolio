import React from 'react'
import { AboutContainer } from '../containers/about'
import { ProjectContainer } from '../containers/project'
import { ContactContainer } from '../containers/contact'
import { MainContainer } from '../containers/main'
export default function Home() {
    return (
        <>
            <MainContainer />
            <AboutContainer />
            <ProjectContainer />
            <ContactContainer />
        </>
    )
}