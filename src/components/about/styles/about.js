import styles from 'styled-components/macro'

export const Container = styles.div`
    display: flex;
    flex-direction: column;
    color: #4A4A4A;
    background-color: white;
    height: 100%;
    padding: 0 180px;
`

export const Title = styles.h2`
    font-size: 64px;
    font-weight: bold;
`

export const BackgroundText = styles.h1`
    font-size: 400px;
    position: absolute;
    align-self: center;
    transform: translate(0%, -40%);
    color: #f0f0f0;
    z-index: 1;
    font-weight: bold;
`

export const Frame = styles.p`
    font-size: 24px;
    z-index: 2;
`