import styled from 'styled-components';

export const MainRodape = styled.div`
    width: 100vw;
    height: 15vh;
    background-color: #1DC81D;
    display: flex;

    @media (max-width: 930px) {
        height: auto;
        flex-direction: column;
    }
`

export const LeftRodape = styled.div`
    width: 70%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    @media (max-width: 930px) {
        width: 100%;
        height: auto;
        flex-direction: column;
        text-align: center;
    }

    & > img {
        width: 80px;
    }

    & > p {
        color: #fff;
        font-family: 'Open Sans', sans-serif;
        font-size: 20px;
        margin-left: 10px;
    }
`

export const RightRodape = styled.div`
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex-direction: column;
    padding-right: 30px;

    & > p {
        color: #fff;
        font-family: 'Open Sans', sans-serif;
        margin: 0;
        padding: 0;
    }

    & > a {
        width: 200px;
        height: 30px;
        background-color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;

        & > p {
            font-family: 'Open Sans', sans-serif;
        }
    }

    @media (max-width: 930px) {
        width: 100%;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        text-align: center;
        padding-bottom: 30px;
    }
`