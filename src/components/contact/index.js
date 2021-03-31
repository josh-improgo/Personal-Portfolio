import React from 'react'
import { Container, Form, Title, BackgroundText, Label, Input, TextArea, Button } from './styles/contact'

export default function Contact({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

Contact.Form = function ContactForm({children, ...restProps}) {
    return <Form {...restProps}>{children}</Form>
}

Contact.Title = function ContactTitle({children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>
}

Contact.BackgroundText = function ContactBackgroundText({children, ...restProps}) {
    return <BackgroundText {...restProps}>{children}</BackgroundText>
}

Contact.Label = function ContactLabel({children, ...restProps}) {
    return <Label {...restProps}>{children}</Label>
}

Contact.Input = function ContactInput({...restProps}) {
    return <Input {...restProps} />
}

Contact.TextArea = function ContactTextArea({children, ...restProps}) {
    return <TextArea {...restProps}>{children}</TextArea>
}

Contact.Button = function ContactButton({children, ...restProps}) {
    return <Button {...restProps}>{children}</Button>
}