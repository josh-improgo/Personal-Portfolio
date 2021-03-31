import styled from 'styled-components/macro'

export const Container = styled.div`
    background-color: #E2E2E2;
    color: #4A4A4A;
    padding: 0 180px;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    z-index: 2;
`


export const Title = styled.h2`
    font-size: 64px;
    font-weight: bold;
`

export const BackgroundText = styled.h1`
    color: #F0F0F0;
    font-size: 400px;
    position: absolute;
    align-self: center;
    transform: translate(0%, -40%);
    color: #f0f0f0;
    font-weight: bold;
    z-index: 1;
`

export const Label = styled.label`
    font-size: 36px;
    z-index: 2;
`

export const Input = styled.input`
    border: 2px #4A4A4A solid;
    border-radius: 10px;
    height: 50px;
    z-index: 2;
`

export const TextArea = styled.textarea`
    border: 2px #4A4A4A solid;
    border-radius: 10px;
    font-family: "Roboto", sans-serif;
    color: #4A4A4A;
    z-index: 2;

`

export const Button = styled.button`
    color: white;
    background-color: #4A4A4A;
    padding: 2em 1.5em;
    width: 10%;
    border: none;
    border-radius: 10px;
    align-self: flex-end;
    margin-top: 10px;
`
