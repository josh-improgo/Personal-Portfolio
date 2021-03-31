import styled from 'styled-components/macro'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    color: #4A4A4A;
    background-color: white;
    height: 100%;
    padding: 0 180px;
    div:nth-of-type(2n) {
        flex-direction: row-reverse;
    }

    z-index: 2;
`

export const Frame = styled.div`
    display: flex;
    gap: 100px;
    margin: 10px 0px;
    z-index: 2;
`

export const Title = styled.h2`
    font-size: 64px;
    font-weight: bold;
    z-index: 2;
`

export const BackgroundText = styled.div`
    font-size: 400px;
    position: absolute;
    align-self: center;
    transform: translate(0%, 100%);
    color: #f0f0f0;
    z-index: 1;
    font-weight: bold;
`

export const SubTitle = styled.div`
    font-size: 48px;
`

export const Content = styled.div`
    font-size: 24px;
    
`

export const Text = styled.p`
    line-height: 50px;
`

export const Tag = styled.span`
    background-color: #4A4A4A;
    color: white;
    padding: 5px 10px;
    margin-right: 10px;
    border-radius: 5px;

`


export const ImageContainer = styled.div`
    height: 500px;
    width: 500px;
`

export const Image = styled.img`
    height: inherit;
    width: inherit;
    object-fit: cover;
`
