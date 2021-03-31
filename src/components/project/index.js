import React from 'react'
import { Container, Frame, Title, BackgroundText, SubTitle, Content, Text, Tag, Image, ImageContainer } from './styles/project'

export default function Project({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

Project.Frame = function ProjectFrame({children, ...restProps}) {
    return <Frame {...restProps}>{children}</Frame>
}

Project.Title = function ProjectTitle({children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>
}

Project.BackgroundText = function ProjectBackgroundText({children, ...restProps}) {
    return <BackgroundText {...restProps}>{children}</BackgroundText>
}

Project.SubTitle = function ProjectSubTitle({children, ...restProps}) {
    return <SubTitle {...restProps}>{children}</SubTitle>
}

Project.Content = function ProjectContent({children, ...restProps}) {
    return <Content {...restProps}>{children}</Content>
}

Project.Text = function ProjectText({children, ...restProps}) {
    return <Text {...restProps}>{children}</Text>
}

Project.Tag = function ProjectTag({children, ...restProps}) {
    return <Tag {...restProps}>{children}</Tag>
}

Project.ImageContainer = function ProjectImageContainer({children, ...restProps}) {
    return <ImageContainer {...restProps}>{children}</ImageContainer>
}

Project.Image = function ProjectImage({...restProps}) {
    return <Image {...restProps} />
}

