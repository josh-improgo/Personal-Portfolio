import React from 'react'
import { Main } from '../components'

export function MainContainer() {
    return (
        <Main>
            <Main.SmallText>Hello, I am</Main.SmallText>
            <Main.LargeText>Josh Improgo</Main.LargeText>
            <Main.SmallText>Full-Stack Developer</Main.SmallText>
            <Main.VerticalLine />
            <Main.Content>
                A student at Queens College with a craving for learning new technologies. I have a passion for writing code to solve complex problems and hope to impact thousands of users.
           </Main.Content>
            <Main.Button>VIEW PROJECTS</Main.Button>
        </Main>
    )
}
