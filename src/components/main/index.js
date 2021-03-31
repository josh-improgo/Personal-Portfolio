import React from 'react'
import { Container, LargeText, SmallText, Button, Content, VerticalLine } from './styles/main'

export default function Main({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

Main.LargeText = function MainLargeText({children, ...restProps}) {
    return <LargeText {...restProps}>{children}</LargeText>
}

Main.SmallText = function MainSmallText({children, ...restProps}) {
    return <SmallText {...restProps}>{children}</SmallText>
}

Main.Button = function MainButton({children, ...restProps}) {
    return <Button {...restProps}>{children}</Button>
}

Main.Content = function MainContent({children, ...restProps}) {
    return <Content {...restProps}>{children}</Content>
}

Main.VerticalLine = function MainVerticalLine({children, ...restProps}) {
    return <VerticalLine {...restProps} />
}