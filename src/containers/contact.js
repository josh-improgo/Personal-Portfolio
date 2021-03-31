import React from 'react'
import { Contact } from '../components'

export function ContactContainer() {
    return (
        <Contact>
            <Contact.Form>
                <Contact.Title>LET'S CONNECT</Contact.Title>
                <Contact.BackgroundText>CONNECT</Contact.BackgroundText>
                <Contact.Label for="">Full Name</Contact.Label>
                <Contact.Input id="full-name" type="text" />
                <Contact.Label for="email">Email Address</Contact.Label>
                <Contact.Input id="email" type="email" />
                <Contact.Label for="message">Message</Contact.Label>
                <Contact.TextArea for="message" rows="20">Type your message here</Contact.TextArea>
                <Contact.Button>SEND</Contact.Button>
            </Contact.Form>
        </Contact>
    )
}
