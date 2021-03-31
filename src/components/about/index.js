import React from 'react'
import { Container, Title, BackgroundText, Frame } from './styles/about'

export default function About({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

About.Title = function AboutTitle({children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>
}

About.BackgroundText = function AboutBackgroundText({children, ...restProps}) {
    return <BackgroundText {...restProps}>{children}</BackgroundText>
}

About.Frame = function AboutFrame({children, ...restProps}) {
    return <Frame {...restProps}>{children}</Frame>
}